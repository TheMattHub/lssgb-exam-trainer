// Resources: reference tables, diagrams, worked examples and cheat sheets (data/resources/*.js, RES registry).
// Index grouped by phase with a kind filter; one page per resource; helpers for the learn and question views.
var Resources = (function () {
  "use strict";
  var h = U.h;
  var KINDS = [
    { id: "table", one: "Table", many: "Tables" },
    { id: "diagram", one: "Diagram", many: "Diagrams" },
    { id: "example", one: "Worked example", many: "Worked examples" },
    { id: "cheatsheet", one: "Cheat sheet", many: "Cheat sheets" }
  ];
  var filter = "all";   // kept for the session, so coming back from a resource keeps the list as it was

  function kindName(id) { var k = KINDS.find(function (x) { return x.id === id; }); return k ? k.one : id; }
  function href(r) { return "#/resources/" + encodeURIComponent(r.id); }
  function phaseName(id) { var p = U.phase(id); return p ? p.name : "General"; }
  function kindChip(r) { return h("span", { class: "chip kind-" + r.kind, text: kindName(r.kind) }); }

  // ---------- index ----------

  function renderIndex(main) {
    main.appendChild(h("h1", { text: "Resources" }));
    var all = RES.all();
    if (!all.length) {
      main.appendChild(h("div", { class: "card empty" },
        h("p", { text: "No resources are loaded yet. Tables, diagrams, worked examples and cheat sheets will appear here." }),
        h("a", { class: "btn ghost", href: "#/learn" }, "Go to Learn notes")));
      return;
    }
    main.appendChild(h("p", { class: "muted intro", text: "Tables, diagrams, worked examples and cheat sheets to keep at hand while you practise. Search them with the rest of the notes in Learn." }));

    var bar = h("div", { class: "filters", role: "group", "aria-label": "Show" });
    var list = h("div", { "aria-live": "polite" });
    [{ id: "all", many: "All" }].concat(KINDS).forEach(function (k) {
      var n = k.id === "all" ? all.length : all.filter(function (r) { return r.kind === k.id; }).length;
      if (!n) return;
      bar.appendChild(h("button", { type: "button", class: "filter", "data-kind": k.id, "data-fid": "f-" + k.id, "aria-pressed": String(filter === k.id),
        onclick: function () {
          filter = k.id;
          bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-kind") === filter)); });
          fill();
        } }, k.many, h("span", { class: "filter-n tnum", text: String(n) })));
    });
    if (!all.some(function (r) { return r.kind === filter; })) filter = "all";
    bar.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-kind") === filter)); });

    function fill() {
      list.replaceChildren();
      var shown = all.filter(function (r) { return filter === "all" || r.kind === filter; });
      U.phases().map(function (p) { return p.id; }).concat("general").forEach(function (pid) {
        var inPhase = shown.filter(function (r) { return r.phase === pid; });
        if (!inPhase.length) return;
        var ul = h("ul", { class: "res-list" });
        inPhase.forEach(function (r) {
          ul.appendChild(h("li", null,
            h("a", { class: "res-link", href: href(r) },
              h("span", { class: "res-title" }, r.title),
              h("span", { class: "res-sum", text: r.summary })),
            kindChip(r)));
        });
        list.appendChild(h("section", { class: "card phase-card " + U.phaseClass(pid) }, h("h2", null, U.phaseBadge(pid), phaseName(pid)), ul));
      });
    }
    main.appendChild(bar);
    main.appendChild(list);
    fill();
  }

  // ---------- one resource ----------

  function renderDetail(main, id) {
    var r = RES.get(id);
    main.appendChild(h("p", { class: "crumbs" }, h("a", { href: "#/resources" }, "Resources"), r ? " / " + phaseName(r.phase) : ""));
    if (!r) {
      main.appendChild(h("h1", { text: "Resource not found" }));
      main.appendChild(h("div", { class: "card empty" }, h("p", { text: "This resource is not in the library (it may have been renamed)." }),
        h("a", { class: "btn ghost", href: "#/resources" }, "All resources")));
      return;
    }
    main.appendChild(h("h1", { text: r.title }));
    var chips = h("p", { class: "chip-row" }, kindChip(r));
    r.topics.forEach(function (tid) {
      var t = U.topic(tid); if (!t) return;
      chips.appendChild(LEARN.get(tid) ? h("a", { class: "chip dim chip-link", href: "#/learn/" + encodeURIComponent(tid) }, t.name) : h("span", { class: "chip dim", text: t.name }));
    });
    main.appendChild(chips);

    var art = h("article", { class: "card learn res" });
    art.appendChild(h("p", { class: "lead prose", text: r.summary }));
    if (r.img) {
      // A white panel in both themes: the diagrams are drawn for white (docs/CONTENT_GUIDE.md, Diagram style).
      art.appendChild(h("figure", { class: "fig" },
        h("div", { class: "fig-panel" }, h("img", { src: r.img, alt: r.alt, loading: "lazy", decoding: "async" })),
        h("figcaption", { class: "small muted" },
          h("a", { href: r.img, target: "_blank", rel: "noopener" }, "Open full size"), " (opens the drawing in a new tab)")));
    }
    if (r.table) art.appendChild(table(r.table, r.kind === "table" || r.kind === "cheatsheet" ? r.title : "Table"));
    if (r.steps) {
      var ol = h("ol", { class: "steps" });
      r.steps.forEach(function (s) {
        var role = /^given/i.test(s.label) ? "given" : /^(answer|result|conclusion)/i.test(s.label) ? "answer" : "work";
        ol.appendChild(h("li", { class: "step step-" + role },
          h("p", { class: "step-label", text: s.label }), h("p", { class: "step-text", text: s.text })));
      });
      art.appendChild(h("section", null, h("h2", { text: "Step by step" }), ol));
    }
    if (r.points && r.points.length) {
      art.appendChild(h("section", null, h("h2", { text: r.kind === "diagram" ? "How to read it" : "Key points" }),
        h("ul", { class: "prose" }, r.points.map(function (x) { return h("li", { text: x }); }))));
    }
    main.appendChild(art);

    var first = r.topics.find(function (tid) { return QB.all().some(function (q) { return q.topic === tid; }); });
    main.appendChild(h("div", { class: "row wrap" },
      first ? h("a", { class: "btn", href: "#/topic/" + encodeURIComponent(first), title: U.topic(first).name }, "Practise this topic") : null,
      h("a", { class: "btn ghost", href: "#/resources" }, "All resources")));
  }

  // Table in its own horizontal scroller, so a wide table never makes the page scroll sideways on a phone.
  function table(t, caption) {
    var tbl = h("table", { class: "tbl" }, h("caption", { class: "sr", text: caption }),
      h("thead", null, h("tr", null, t.head.map(function (c) { return h("th", { scope: "col", text: c }); }))));
    var tb = h("tbody");
    t.rows.forEach(function (row) { tb.appendChild(h("tr", null, row.map(function (c) { return h("td", { text: c }); }))); });
    tbl.appendChild(tb);
    return h("div", null,
      h("div", { class: "table-box", tabindex: "0", role: "region", "aria-label": caption + " (scrolls sideways)" }, tbl),
      t.note ? h("p", { class: "small muted note", text: t.note }) : null);
  }

  // ---------- helpers for other views ----------

  // "Resources for this topic" on a learn page; null when there are none.
  function sectionFor(topic) {
    var list = RES.forTopic(topic);
    if (!list.length) return null;
    var ul = h("ul", { class: "res-list compact" });
    list.forEach(function (r) {
      ul.appendChild(h("li", null, h("a", { class: "res-link", href: href(r) }, h("span", { class: "res-title" }, r.title)), kindChip(r)));
    });
    return h("section", { class: "card" }, h("h2", { text: "Resources for this topic" }), ul);
  }

  // One subtle link after a question is answered; worked examples first, since they show the method.
  function relatedLink(topic) {
    var list = RES.forTopic(topic);
    if (!list.length) return null;
    var r = list.find(function (x) { return x.kind === "example"; }) || list[0];
    return h("a", { href: href(r) }, kindName(r.kind) + ": " + r.title);
  }

  // Search entries for Learn's index.
  function searchEntries() {
    return RES.all().map(function (r) {
      var texts = [r.title, r.summary].concat(r.points || []);
      if (r.alt) texts.push(r.alt);
      if (r.table) { texts.push(r.table.head.join(" ")); r.table.rows.forEach(function (row) { texts.push(row.join(" ")); }); if (r.table.note) texts.push(r.table.note); }
      (r.steps || []).forEach(function (s) { texts.push(s.label + ": " + s.text); });
      return { kind: "resource", id: r.id, topic: r.topics[0], label: kindName(r.kind), title: r.title, texts: texts };
    });
  }

  return { renderIndex: renderIndex, renderDetail: renderDetail, sectionFor: sectionFor, relatedLink: relatedLink, searchEntries: searchEntries };
})();
