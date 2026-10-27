// QB and LEARN: the registries the data packs call (see docs/CONTENT_GUIDE.md).
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

  window.DATA_STATUS = { topicsOk: topicsOk, skipped: skipped };
})();
