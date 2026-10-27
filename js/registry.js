// QB, LEARN and RES: the registries the data packs call (see docs/CONTENT_GUIDE.md).
// The app trusts nothing in a pack: items that break the contract are skipped and counted,
// so one bad question never blanks the app. tools/validate.mjs gives the full diagnosis.
(function () {
  "use strict";
  var topicsOk = typeof TOPICS === "object" && TOPICS && Array.isArray(TOPICS.topics) && Array.isArray(TOPICS.phases);
  var topicIds = new Set(topicsOk ? TOPICS.topics.map(function (t) { return t.id; }) : []);
  var questions = new Map();   // id -> question; Map so ids like "__proto__" are harmless
  var pages = new Map();       // topic id -> learn page
  var skipped = [];

  function str(v) { return typeof v === "string" && v.trim() !== ""; }
  function strList(v) { return v === undefined || (Array.isArray(v) && v.every(str)); }

  function validQuestion(q) {
    return q && typeof q === "object" && str(q.id) && topicIds.has(q.topic) && str(q.q) &&
      Array.isArray(q.options) && q.options.length === 4 &&
      q.options.every(function (o) { return o && str(o.t) && str(o.why); }) &&
      Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3;
  }

  function validPage(p) {
    return p && typeof p === "object" && topicIds.has(p.topic) && str(p.summary) &&
      strList(p.points) && strList(p.traps);
  }

  window.QB = {
    add: function (list) {
      if (!Array.isArray(list)) return;
      list.forEach(function (q) {
        if (!validQuestion(q)) { skipped.push("question " + (q && q.id)); return; }
        if (questions.has(q.id)) { skipped.push("duplicate id " + q.id); return; }
        questions.set(q.id, q);
      });
    },
    all: function () { return Array.from(questions.values()); },
    get: function (id) { return questions.get(id); },
    has: function (id) { return questions.has(id); }
  };

  window.LEARN = {
    add: function (list) {
      if (!Array.isArray(list)) return;
      list.forEach(function (p) {
        if (!validPage(p)) { skipped.push("learn page " + (p && p.topic)); return; }
        if (pages.has(p.topic)) { skipped.push("second learn page " + p.topic); return; }
        pages.set(p.topic, p);
      });
    },
    get: function (topic) { return pages.get(topic); },
    all: function () { return Array.from(pages.values()); }
  };

  // ---------- resources (tables, diagrams, worked examples, cheat sheets) ----------
  var resources = new Map();   // id -> resource, in file order
  var phaseIds = new Set((topicsOk ? TOPICS.phases.map(function (p) { return p.id; }) : []).concat("general"));
  var KINDS = ["table", "diagram", "example", "cheatsheet"];
  // Only a plain relative path into assets/: the src never leaves the site or climbs out of it.
  var IMG_RE = /^assets\/[A-Za-z0-9_\/-]+\.svg$/;

  function validTable(t) {
    return t && typeof t === "object" && Array.isArray(t.head) && t.head.length > 0 && t.head.every(str) &&
      Array.isArray(t.rows) && t.rows.every(function (r) {
        return Array.isArray(r) && r.length === t.head.length && r.every(function (c) { return typeof c === "string"; });
      }) && (t.note === undefined || str(t.note));
  }

  function validResource(r) {
    if (!r || typeof r !== "object" || !str(r.id) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id) || !phaseIds.has(r.phase) ||
      KINDS.indexOf(r.kind) < 0 || !str(r.title) || !str(r.summary) || !strList(r.points)) return false;
    if (!Array.isArray(r.topics) || !r.topics.every(function (t) { return topicIds.has(t); })) return false;
    if (r.table !== undefined && !validTable(r.table)) return false;
    if (r.img !== undefined && !(typeof r.img === "string" && IMG_RE.test(r.img) && str(r.alt))) return false;
    if (r.steps !== undefined && !(Array.isArray(r.steps) && r.steps.length > 0 &&
      r.steps.every(function (s) { return s && str(s.label) && str(s.text); }))) return false;
    // Each kind needs the field that makes it what it is.
    if (r.kind === "table" && !r.table) return false;
    if (r.kind === "cheatsheet" && !r.table && !(r.points && r.points.length)) return false;
    if (r.kind === "diagram" && !r.img) return false;
    if (r.kind === "example" && !r.steps) return false;
    return true;
  }

  window.RES = {
    add: function (list) {
      if (!Array.isArray(list)) return;
      list.forEach(function (r) {
        if (!validResource(r)) { skipped.push("resource " + (r && r.id)); return; }
        if (resources.has(r.id)) { skipped.push("duplicate resource id " + r.id); return; }
        resources.set(r.id, r);
      });
    },
    all: function () { return Array.from(resources.values()); },
    get: function (id) { return resources.get(id); },
    forTopic: function (topic) { return this.all().filter(function (r) { return r.topics.indexOf(topic) >= 0; }); }
  };

  window.DATA_STATUS = { topicsOk: topicsOk, skipped: skipped };
})();
