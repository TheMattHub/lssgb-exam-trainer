// Checks data/questions/*.js, data/learn/*.js and data/resources/*.js against docs/CONTENT_GUIDE.md.
// Usage: node tools/validate.mjs        Exit code 1 when any error is found (warnings do not fail).
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// One shared context, like the browser: topics.js first, then every pack file.
// QB.add / LEARN.add record which file each item came from.
let currentPack = "";
const questions = [];
const pages = [];
const resources = [];
const context = vm.createContext({
  QB: { add: (list) => collect(list, questions, "QB.add") },
  LEARN: { add: (list) => collect(list, pages, "LEARN.add") },
  RES: { add: (list) => collect(list, resources, "RES.add") }
});
function collect(list, into, fn) {
  if (!Array.isArray(list)) { err(currentPack, `${fn} needs an array`); return; }
  for (const item of list) into.push({ pack: currentPack, item });
}
function run(file, label) {
  currentPack = label;
  try {
    vm.runInContext(readFileSync(file, "utf8"), context, { filename: file });
  } catch (e) {
    err(label, `failed to load: ${e.message}`);
  }
}

run(join(root, "data", "topics.js"), "topics.js");
const TOPICS = vm.runInContext("typeof TOPICS === 'undefined' ? null : TOPICS", context);
if (!TOPICS) { console.error("data/topics.js did not define TOPICS"); process.exit(1); }
const topicById = new Map(TOPICS.topics.map((t) => [t.id, t]));

const packFiles = (dir) => existsSync(join(root, "data", dir)) ? readdirSync(join(root, "data", dir)).filter((f) => f.endsWith(".js")).sort() : [];
for (const f of packFiles("questions")) run(join(root, "data", "questions", f), `questions/${f}`);
for (const f of packFiles("learn")) run(join(root, "data", "learn", f), `learn/${f}`);
for (const f of packFiles("resources")) run(join(root, "data", "resources", f), `resources/${f}`);

// Every data file must also be loaded by index.html, or the app never sees it.
const indexHtml = readFileSync(join(root, "index.html"), "utf8");
for (const dir of ["questions", "learn", "resources"])
  for (const f of packFiles(dir)) if (!indexHtml.includes(`data/${dir}/${f}`)) warn(`${dir}/${f}`, "no <script> tag in index.html, so the app does not load it");

const isText = (v) => typeof v === "string" && v.trim().length > 0;
const packOf = (label) => basename(label, ".js");
// "both" is only an error when it points at other options ("Both A and B", "both of the above").
const BANNED = /\b(all of the above|none of the above|both\s+(?:[a-d]\b|of the above|options?\b|answers?\b))/i;

// ---- questions ----
const seenIds = new Set();
for (const { pack, item: q } of questions) {
  const where = `${pack} ${q && isText(q.id) ? q.id : "(no id)"}`;
  if (!q || typeof q !== "object") { err(pack, "question is not an object"); continue; }
  if (!isText(q.id)) err(where, "missing id");
  else if (seenIds.has(q.id)) err(where, "duplicate id");
  else seenIds.add(q.id);
  // Any question pack may hold questions for any topic (topic.pack names the learn file only).
  if (!topicById.has(q.topic)) err(where, `unknown topic "${q.topic}"`);
  if (![1, 2, 3].includes(q.level)) err(where, "level must be 1, 2 or 3");
  if (!isText(q.q)) err(where, "missing question text q");
  if (!isText(q.ref)) err(where, "missing ref");
  if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) err(where, "answer must be an integer 0-3");
  if (!Array.isArray(q.options) || q.options.length !== 4) { err(where, "needs exactly 4 options"); continue; }
  const texts = new Set();
  q.options.forEach((o, i) => {
    const ow = `${where} option ${i}`;
    if (!o || !isText(o.t)) { err(ow, "missing t"); return; }
    if (!isText(o.why)) { err(ow, "missing why"); return; }
    const key = o.t.trim().toLowerCase();
    if (texts.has(key)) err(ow, "duplicate option text");
    texts.add(key);
    if (BANNED.test(o.t)) err(ow, `banned wording "${o.t.match(BANNED)[0]}" (options are shuffled)`);
    else if (/\bboth\b/i.test(o.t)) warn(ow, `contains "both"; make sure it does not refer to other options`);
    const want = i === q.answer ? "Correct:" : "Wrong:";
    if (!o.why.startsWith(want)) err(ow, `why must start with "${want}"`);
  });
  oddOneOut(q, where);
}

// "Odd one out" giveaway: the three wrong options open with the same two words and the right one does not,
// so the answer can be spotted without knowing the topic. Stems with NOT/EXCEPT legitimately work the other way.
function firstTwo(t) { return t.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean).slice(0, 2).join(" "); }
function oddOneOut(q, where) {
  if (!isText(q.q) || /\b(NOT|EXCEPT)\b/.test(q.q) || !Number.isInteger(q.answer) || !q.options.every((o) => o && isText(o.t))) return;
  const wrong = q.options.filter((_, i) => i !== q.answer).map((o) => firstTwo(o.t));
  if (wrong[0].split(" ").length === 2 && wrong.every((w) => w === wrong[0]) && firstTwo(q.options[q.answer].t) !== wrong[0])
    warn(where, `odd one out: the three wrong options all start "${wrong[0]}", the correct one does not`);
}

// ---- learn pages ----
const pageTopics = new Set();
for (const { pack, item: p } of pages) {
  const where = `${pack} ${p && p.topic}`;
  if (!p || typeof p !== "object") { err(pack, "learn page is not an object"); continue; }
  if (!topicById.has(p.topic)) { err(where, "unknown topic"); continue; }
  if (pageTopics.has(p.topic)) err(where, "second learn page for this topic");
  pageTopics.add(p.topic);
  if (packOf(pack) !== topicById.get(p.topic).pack) warn(where, `topic belongs to pack "${topicById.get(p.topic).pack}"`);
  if (!isText(p.summary)) err(where, "missing summary");
  const strList = (key, min, max, required) => {
    const v = p[key];
    if (v === undefined) { if (required) err(where, `missing ${key}`); return; }
    if (!Array.isArray(v) || !v.every(isText)) { err(where, `${key} must be a list of strings`); return; }
    if (v.length < min || v.length > max) warn(where, `${key} has ${v.length} items (guide: ${min}-${max})`);
  };
  strList("points", 5, 12, true);
  strList("traps", 2, 5, true);
  if (p.formulas !== undefined && !(Array.isArray(p.formulas) && p.formulas.every((f) => f && isText(f.name) && isText(f.f))))
    err(where, "formulas must be a list of { name, f }");
  if (p.terms !== undefined && !(Array.isArray(p.terms) && p.terms.every((t) => t && isText(t.term) && isText(t.def))))
    err(where, "terms must be a list of { term, def }");
  if (p.table !== undefined) {
    const t = p.table;
    const ok = t && isText(t.title) && Array.isArray(t.head) && t.head.every(isText) && Array.isArray(t.rows) &&
      t.rows.every((r) => Array.isArray(r) && r.length === t.head.length && r.every((c) => typeof c === "string"));
    if (!ok) err(where, "table must be { title, head: [..], rows: [[..]] } with rows as wide as head");
  }
}

// ---- resources ----
const phaseIds = new Set(TOPICS.phases.map((p) => p.id).concat("general"));
const KINDS = ["table", "diagram", "example", "cheatsheet"];
const resIds = new Set();
const tableOk = (t) => t && Array.isArray(t.head) && t.head.length > 0 && t.head.every(isText) && Array.isArray(t.rows) &&
  t.rows.every((r) => Array.isArray(r) && r.every((c) => typeof c === "string")) && (t.note === undefined || isText(t.note));
for (const { pack, item: r } of resources) {
  const where = `${pack} ${r && isText(r.id) ? r.id : "(no id)"}`;
  if (!r || typeof r !== "object") { err(pack, "resource is not an object"); continue; }
  if (!isText(r.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id)) err(where, "id must be kebab-case (a-z, 0-9, -)");
  else if (resIds.has(r.id)) err(where, "duplicate id");
  else resIds.add(r.id);
  if (!phaseIds.has(r.phase)) err(where, `unknown phase "${r.phase}"`);
  if (!KINDS.includes(r.kind)) err(where, `kind must be one of ${KINDS.join(", ")}`);
  if (!isText(r.title)) err(where, "missing title");
  if (!isText(r.summary)) err(where, "missing summary");
  if (!Array.isArray(r.topics)) err(where, "topics must be a list of topic ids");
  else {
    for (const t of r.topics) if (!topicById.has(t)) err(where, `unknown topic "${t}"`);
    if (!r.topics.length && r.phase !== "general") warn(where, "no topics: it will not show on any learn page");
  }
  if (r.points !== undefined) {
    if (!Array.isArray(r.points) || !r.points.every(isText)) err(where, "points must be a list of strings");
    else if (r.points.length < 2 || r.points.length > 6) warn(where, `points has ${r.points.length} items (guide: 2-6)`);
  }
  if (r.table !== undefined) {
    if (!tableOk(r.table)) err(where, "table must be { head: [..], rows: [[..]], note? } with text cells");
    else r.table.rows.forEach((row, i) => { if (row.length !== r.table.head.length) err(where, `table row ${i + 1} has ${row.length} cells, head has ${r.table.head.length}`); });
  }
  if (r.img !== undefined) {
    if (typeof r.img !== "string" || !/^assets\/[A-Za-z0-9_\/-]+\.svg$/.test(r.img)) err(where, `img must be a path like assets/diagrams/name.svg (got "${r.img}")`);
    else if (!existsSync(join(root, r.img))) err(where, `img file ${r.img} does not exist`);
    else {
      // The "open full size" link shows the SVG as its own page, outside the app's CSP: it must be inert.
      const svg = readFileSync(join(root, r.img), "utf8");
      if (/<script|\son[a-z]+\s*=|javascript:|<foreignObject/i.test(svg)) err(where, `${r.img} contains script, event handlers or foreignObject`);
      if (/(?:href|src)\s*=\s*["'](?:https?:)?\/\//i.test(svg) || /@import|url\(\s*["']?https?:/i.test(svg)) err(where, `${r.img} references an external file`);
      if (!/<title[\s>]/.test(svg)) warn(where, `${r.img} has no <title>`);
    }
    if (!isText(r.alt)) err(where, "img needs alt text");
  }
  if (r.steps !== undefined && !(Array.isArray(r.steps) && r.steps.length && r.steps.every((s) => s && isText(s.label) && isText(s.text))))
    err(where, "steps must be a list of { label, text }");
  if (r.kind === "table" && r.table === undefined) err(where, "kind table needs table");
  if (r.kind === "cheatsheet" && r.table === undefined && !(Array.isArray(r.points) && r.points.length)) err(where, "kind cheatsheet needs table or points");
  if (r.kind === "diagram" && r.img === undefined) err(where, "kind diagram needs img and alt");
  if (r.kind === "example" && r.steps === undefined) err(where, "kind example needs steps (given, working, answer)");
}

// ---- report ----
const pad = (s, n) => String(s).padEnd(n);
const lpad = (s, n) => String(s).padStart(n);
const packs = [...new Set([...packFiles("questions"), ...packFiles("learn")].map((f) => basename(f, ".js")))].sort();
console.log("\nResources");
console.log(`${pad("phase", 9)}${KINDS.map((k) => lpad(k, 11)).join("")}${lpad("total", 7)}`);
for (const ph of [...phaseIds]) {
  const rs = resources.map((x) => x.item).filter((r) => r && r.phase === ph);
  console.log(`${pad(ph, 9)}${KINDS.map((k) => lpad(rs.filter((r) => r.kind === k).length, 11)).join("")}${lpad(rs.length, 7)}`);
}
console.log("\nPer pack");
console.log(`${pad("pack", 10)}${lpad("questions", 10)}${lpad("L1", 5)}${lpad("L2", 5)}${lpad("L3", 5)}${lpad("learn", 7)}`);
for (const pk of packs) {
  const qs = questions.filter((x) => packOf(x.pack) === pk).map((x) => x.item);
  const lv = (n) => qs.filter((q) => q && q.level === n).length;
  const lp = pages.filter((x) => packOf(x.pack) === pk).length;
  console.log(`${pad(pk, 10)}${lpad(qs.length, 10)}${lpad(lv(1), 5)}${lpad(lv(2), 5)}${lpad(lv(3), 5)}${lpad(lp, 7)}`);
}

console.log("\nPer topic");
console.log(`${pad("phase", 9)}${pad("topic", 16)}${lpad("questions", 10)}${lpad("learn", 7)}`);
for (const t of TOPICS.topics) {
  const n = questions.filter((x) => x.item && x.item.topic === t.id).length;
  console.log(`${pad(t.phase, 9)}${pad(t.id, 16)}${lpad(n, 10)}${lpad(pageTopics.has(t.id) ? "yes" : "-", 7)}`);
}

const valid = questions.map((x) => x.item).filter((q) => q && Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3 && q.options.every((o) => o && typeof o.t === "string"));
const idx = [0, 0, 0, 0];
let longest = 0;
for (const q of valid) {
  idx[q.answer]++;
  const lens = q.options.map((o) => o.t.length);
  const max = Math.max(...lens);
  if (lens[q.answer] === max && lens.filter((l) => l === max).length === 1) longest++;
}
const pct = (n) => (valid.length ? Math.round((n / valid.length) * 100) : 0) + "%";
console.log(`\nCorrect-answer index before shuffle: 0=${idx[0]}  1=${idx[1]}  2=${idx[2]}  3=${idx[3]}`);
console.log(`Correct option is the single longest: ${longest} of ${valid.length} (${pct(longest)}; about 25% is neutral)`);

if (warnings.length) console.log(`\nWarnings (${warnings.length})\n  ` + warnings.join("\n  "));
if (errors.length) {
  console.log(`\nErrors (${errors.length})\n  ` + errors.join("\n  "));
  console.log("\nFAIL");
  process.exit(1);
}
console.log(`\nOK: ${questions.length} questions, ${pages.length} learn pages, ${resources.length} resources, no errors.`);
