// Checks data/questions/*.js and data/learn/*.js against docs/CONTENT_GUIDE.md.
// Usage: node tools/validate.mjs        Exit code 1 when any error is found (warnings do not fail).
import { readFileSync, readdirSync } from "node:fs";
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
const context = vm.createContext({
  QB: { add: (list) => collect(list, questions, "QB.add") },
  LEARN: { add: (list) => collect(list, pages, "LEARN.add") }
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

const packFiles = (dir) => readdirSync(join(root, "data", dir)).filter((f) => f.endsWith(".js")).sort();
for (const f of packFiles("questions")) run(join(root, "data", "questions", f), `questions/${f}`);
for (const f of packFiles("learn")) run(join(root, "data", "learn", f), `learn/${f}`);

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
  const topic = topicById.get(q.topic);
  if (!topic) err(where, `unknown topic "${q.topic}"`);
  else if (packOf(pack) !== topic.pack && packOf(pack) !== "sample") warn(where, `topic "${q.topic}" belongs to pack "${topic.pack}"`);
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
}

// ---- learn pages ----
const pageTopics = new Set();
for (const { pack, item: p } of pages) {
  const where = `${pack} ${p && p.topic}`;
  if (!p || typeof p !== "object") { err(pack, "learn page is not an object"); continue; }
  if (!topicById.has(p.topic)) { err(where, "unknown topic"); continue; }
  if (pageTopics.has(p.topic)) err(where, "second learn page for this topic");
  pageTopics.add(p.topic);
  if (packOf(pack) !== topicById.get(p.topic).pack && packOf(pack) !== "sample") warn(where, `topic belongs to pack "${topicById.get(p.topic).pack}"`);
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

// ---- report ----
const pad = (s, n) => String(s).padEnd(n);
const lpad = (s, n) => String(s).padStart(n);
const packs = [...new Set([...packFiles("questions"), ...packFiles("learn")].map((f) => basename(f, ".js")))].sort();
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
console.log(`\nOK: ${questions.length} questions, ${pages.length} learn pages, no errors.`);
