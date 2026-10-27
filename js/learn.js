// Learn: phases -> topics -> topic page, plus a search across learn text, terms, resources and question stems.
var Learn = (function () {
  "use strict";
  var h = U.h;
  var query = "";
  var index = null;

  function pageText(p) {
    var parts = [p.summary].concat(p.points || [], p.traps || []);
    (p.formulas || []).forEach(function (f) { parts.push(f.name + " " + f.f); });
    (p.terms || []).forEach(function (t) { parts.push(t.term + ": " + t.def); });
    if (p.table && Array.isArray(p.table.rows)) {
      parts.push(p.table.title || "");
      p.table.rows.forEach(function (r) { if (Array.isArray(r)) parts.push(r.join(" ")); });
    }
    return parts.filter(function (x) { return typeof x === "string"; });
  }

  function buildIndex() {
    index = [];
    LEARN.all().forEach(function (p) {
      var t = U.topic(p.topic);
      index.push({ kind: "topic", topic: p.topic, title: t ? t.name : p.topic, texts: [t ? t.name : ""].concat(pageText(p)) });
    });
    Resources.searchEntries().forEach(function (e) { index.push(e); });
    QB.all().forEach(function (q) { index.push({ kind: "question", topic: q.topic, title: q.q, texts: [q.q] }); });
  }

  function search(text) {
    if (!index) buildIndex();
    var words = text.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    var out = [];
    index.forEach(function (e) {
      var all = e.texts.join(" \n").toLowerCase();
      if (!words.every(function (w) { return all.indexOf(w) >= 0; })) return;
      var hit = e.texts.find(function (s) { return s.toLowerCase().indexOf(words[0]) >= 0; }) || e.texts[0];
      out.push({ e: e, snippet: hit });
    });
    return out.slice(0, 40);
  }

  function renderIndex(main) {
    main.appendChild(h("h1", { text: "Learn" }));
    var results = h("div", { class: "results", "aria-live": "polite" });
    var input = h("input", { type: "search", id: "search", class: "search", placeholder: "Search notes, terms, resources and questions", value: query,
      "aria-label": "Search", autocomplete: "off",
      oninput: function () { query = input.value; showResults(); } });
    var browse = h("div", { class: "browse" });

    function showResults() {
      results.replaceChildren();
      var q = query.trim();
      browse.hidden = q.length > 0;
      if (!q) return;
      var hits = search(q);
      results.appendChild(h("p", { class: "muted small", text: hits.length ? hits.length + (hits.length === 40 ? "+" : "") + " matches" : "No matches." }));
      var ul = h("ul", { class: "result-list" });
      hits.forEach(function (r) {
        var t = U.topic(r.e.topic);
        var hasPage = !!LEARN.get(r.e.topic);
        var isQ = r.e.kind === "question", isRes = r.e.kind === "resource";
        var head = isQ ? h("span", { text: r.e.title }) : h("strong", { text: r.e.title });
        var link = isRes ? "#/resources/" + encodeURIComponent(r.e.id) : hasPage ? "#/learn/" + encodeURIComponent(r.e.topic) : "";
        var li = h("li", { class: "card result" },
          h("p", { class: "chip-row" }, h("span", { class: "chip dim", text: isRes ? r.e.label : isQ ? "Question" : "Notes" }), t && isQ ? h("span", { class: "small muted", text: t.name }) : null),
          link ? h("a", { href: link }, head) : head,
          !isQ && r.snippet !== r.e.title ? h("p", { class: "small muted snippet", text: r.snippet }) : null);
        ul.appendChild(li);
      });
      results.appendChild(ul);
    }

    main.appendChild(input);
    main.appendChild(results);

    var counts = new Map();
    QB.all().forEach(function (q) { counts.set(q.topic, (counts.get(q.topic) || 0) + 1); });
    U.phases().forEach(function (p) {
      var ul = h("ul", { class: "topic-links" });
      U.topicsOf(p.id).forEach(function (t) {
        var has = !!LEARN.get(t.id);
        var n = counts.get(t.id) || 0;
        ul.appendChild(h("li", null,
          h("span", null, has ? h("a", { href: "#/learn/" + encodeURIComponent(t.id) }, t.name) : h("span", { class: "muted", text: t.name }), " ", U.bonusTag(t)),
          h("span", { class: "count", text: (has ? "" : "no notes yet · ") + n + " q" })));
      });
      browse.appendChild(h("section", { class: "card phase-card " + U.phaseClass(p.id) }, h("h2", null, U.phaseBadge(p.id), p.name), ul));
    });
    main.appendChild(browse);
    showResults();
  }

  function renderTopic(main, id) {
    var t = U.topic(id), p = LEARN.get(id);
    main.appendChild(h("p", { class: "crumbs" }, h("a", { href: "#/learn" }, "Learn"), t ? " / " + U.phase(t.phase).name : ""));
    if (!t) {
      main.appendChild(h("h1", { text: "Topic not found" }));
      main.appendChild(h("div", { class: "card empty" }, h("p", { text: "This topic is not in the course (it may have been renamed)." }),
        h("a", { class: "btn ghost", href: "#/learn" }, "All topics")));
      return;
    }
    main.appendChild(h("h1", { text: t.name }));
    if (t.bok === false) main.appendChild(h("p", { class: "small muted" }, U.bonusTag(t), " Course topic, not on the IASSC Green Belt exam; left out of mock exams."));
    if (Quiz.backHref()) main.appendChild(h("p", null, h("a", { class: "btn ghost small", href: Quiz.backHref() }, "← Back to questions")));
    if (!p) { main.appendChild(h("p", { class: "card muted", text: "No notes for this topic yet." })); }
    else {
      var art = h("article", { class: "card learn" });
      art.appendChild(h("p", { class: "lead prose", text: p.summary }));
      if (p.points && p.points.length) art.appendChild(section("Key points", list(p.points)));
      if (Array.isArray(p.formulas) && p.formulas.length) {
        var fl = h("dl", { class: "formulas" });
        p.formulas.forEach(function (f) { if (f) { fl.appendChild(h("dt", { text: f.name })); fl.appendChild(h("dd", null, h("code", { text: f.f }))); } });
        art.appendChild(section("Formulas", fl));
      }
      if (p.table && Array.isArray(p.table.head) && Array.isArray(p.table.rows)) {
        var tbl = h("table", { class: "tbl" }, h("caption", { text: p.table.title || "" }),
          h("thead", null, h("tr", null, p.table.head.map(function (c) { return h("th", { scope: "col", text: String(c) }); }))));
        var tb = h("tbody");
        p.table.rows.forEach(function (r) { if (Array.isArray(r)) tb.appendChild(h("tr", null, r.map(function (c) { return h("td", { text: String(c) }); }))); });
        tbl.appendChild(tb);
        art.appendChild(h("div", { class: "scroll-x" }, tbl));
      }
      if (p.traps && p.traps.length) art.appendChild(h("div", { class: "traps" }, h("h2", { text: "Exam traps" }), list(p.traps)));
      if (Array.isArray(p.terms) && p.terms.length) {
        var dl = h("dl", { class: "terms" });
        p.terms.forEach(function (x) { if (x) { dl.appendChild(h("dt", { text: x.term })); dl.appendChild(h("dd", { text: x.def })); } });
        art.appendChild(section("Terms", dl));
      }
      main.appendChild(art);
    }
    var res = Resources.sectionFor(id);
    if (res) main.appendChild(res);
    var n = QB.all().filter(function (q) { return q.topic === id; }).length;
    main.appendChild(h("div", { class: "row wrap" },
      h("button", { class: "btn", type: "button", disabled: n === 0, onclick: function () { location.hash = "#/topic/" + encodeURIComponent(id); } },
        n ? "Practise this topic (" + n + ")" : "No questions yet"),
      h("a", { class: "btn ghost", href: "#/learn" }, "All topics")));
  }

  function section(title, body) { return h("section", null, h("h2", { text: title }), body); }
  function list(items) { return h("ul", { class: "prose" }, items.map(function (x) { return h("li", { text: x }); })); }

  return { renderIndex: renderIndex, renderTopic: renderTopic };
})();
