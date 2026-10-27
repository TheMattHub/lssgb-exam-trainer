// Exam mode (IASSC rules): timed, no feedback until submit. The running exam is saved after every change,
// so a refresh or a closed tab resumes it with the same clock.
var Mock = (function () {
  "use strict";
  var h = U.h;
  var MODES = {
    full:  { label: "Full exam", perPhase: 20, minutes: 180 },
    quick: { label: "Quick exam", perPhase: 5, minutes: 45 }
  };
  var PASS = 70;
  var reviewFilter = "all";

  function st() { return Store.get(); }

  // Only exam topics: course-only topics (bok: false in data/topics.js) never appear in a mock.
  function examQuestions(phaseId) {
    return QB.all().filter(function (q) { var t = U.topic(q.topic); return t && t.phase === phaseId && t.bok !== false; });
  }

  function build(mode) {
    var cfg = MODES[mode], ids = [];
    U.phases().forEach(function (p) {
      var inPhase = examQuestions(p.id);
      U.shuffle(inPhase).slice(0, cfg.perPhase).forEach(function (q) { ids.push(q.id); });
    });
    if (!ids.length) return;
    U.shuffle(ids);
    var now = Date.now();
    st().activeMock = {
      mode: mode, ids: ids,
      perms: ids.map(function () { return U.shuffle([0, 1, 2, 3]); }),
      answers: ids.map(function () { return -1; }), flags: ids.map(function () { return false; }),
      start: now, deadline: now + cfg.minutes * 60000, end: 0, cur: 0
    };
    Store.save();
    location.hash = "#/exam/run";
  }

  function available(mode) {
    var per = MODES[mode].perPhase, n = 0;
    U.phases().forEach(function (p) {
      var c = examQuestions(p.id).length;
      n += Math.min(per, c);
    });
    return n;
  }

  function submit() {
    var m = st().activeMock; if (!m) return;
    var now = Date.now(), right = 0, n = 0;
    m.ids.forEach(function (id, i) {
      var q = QB.get(id); if (!q) return;
      n++;
      var ok = m.answers[i] === q.answer;
      if (ok) right++;
      Store.record(id, ok, now);    // an unanswered question counts as wrong: it is a gap to review
    });
    m.end = Math.min(now, m.deadline);
    Store.addMock({ at: now, mode: m.mode, n: n, right: right });
    st().lastMock = m;
    st().activeMock = null;
    Store.save();
    reviewFilter = "all";
    // A timeout can fire while "Submit the exam?" is open, or while an older result is on screen.
    var dlg = document.getElementById("dialog"); if (dlg.open) dlg.close();
    if (location.hash === "#/exam/result") App.render(); else location.hash = "#/exam/result";
  }

  // Called every second by the app: updates the clock and submits on timeout.
  function tick() {
    var m = st().activeMock; if (!m) return;
    var left = m.deadline - Date.now();
    if (left <= 0) { submit(); return; }
    var el = document.getElementById("clock");
    if (el) {
      el.textContent = U.clock(left);
      el.classList.toggle("low", left < 5 * 60000);
    }
  }

  // ---------- views ----------

  function renderSetup(main) {
    main.appendChild(h("h1", { text: "Exam (IASSC rules)" }));
    var m = st().activeMock;
    if (m) {
      var done = m.answers.filter(function (a) { return a >= 0; }).length;
      main.appendChild(h("div", { class: "card" },
        h("p", null, h("strong", { text: MODES[m.mode].label + " in progress. " }),
          done + " of " + m.ids.length + " answered, " + U.clock(m.deadline - Date.now()) + " left."),
        h("div", { class: "row wrap" },
          h("a", { class: "btn", href: "#/exam/run" }, "Resume"),
          h("button", { class: "btn ghost", type: "button", onclick: function () {
            U.confirm("Abandon this exam?", "Your answers are discarded and nothing is scored.", "Abandon").then(function (yes) {
              if (yes) { st().activeMock = null; Store.save(); App.render(); }
            });
          } }, "Abandon"))));
      return;
    }
    if (!QB.all().length) { main.appendChild(Quiz.emptyData()); return; }
    main.appendChild(h("p", { class: "rules", text: "IASSC rules: 100 questions, 3 hours, pass mark " + PASS + "%, about 20 per DMAIC phase, explanations only after you submit." }));
    var full = MODES.full, nFull = available("full"), quick = MODES.quick, nQuick = available("quick");
    main.appendChild(h("div", { class: "card mode" },
      h("h2", { text: full.label }),
      h("p", { class: "muted tnum", text: nFull + " questions, 3 hours" + (nFull < 100 ? " (only " + nFull + " of 100 available yet)" : "") +
        ". Flag questions and jump between them; bonus topics are left out." }),
      h("button", { class: "btn big", type: "button", disabled: nFull === 0, onclick: function () { build("full"); } }, "Start full exam")));
    main.appendChild(h("div", { class: "card mode row between wrap" },
      h("div", null, h("h2", { class: "h3", text: quick.label }),
        h("p", { class: "small muted tnum", text: nQuick + " questions, 45 minutes, same rules" })),
      h("button", { class: "btn ghost", type: "button", disabled: nQuick === 0, onclick: function () { build("quick"); } }, "Start quick exam")));
    var hist = history();
    if (hist) main.appendChild(hist);
  }

  function history(limit) {
    var list = st().mocks.slice(-(limit || 10)).reverse();
    if (!list.length) return null;
    var ul = h("ul", { class: "history" });
    list.forEach(function (x) {
      var p = U.pct(x.right, x.n), pass = p >= PASS;
      ul.appendChild(h("li", null,
        h("span", { class: "muted tnum", text: new Date(x.at).toLocaleDateString() }),
        h("span", { text: MODES[x.mode].label }),
        h("span", { class: "tnum", text: p + "%" }),
        h("span", { class: "tag " + (pass ? "pass" : "fail"), text: pass ? "PASS" : "FAIL" })));
    });
    return h("section", { class: "card" }, h("h2", { text: "Recent exams" }), ul);
  }

  function select(origIdx) {
    var m = st().activeMock; if (!m) return;
    m.answers[m.cur] = m.answers[m.cur] === origIdx ? -1 : origIdx;   // pressing the chosen option again clears it
    Store.save(); App.render();
  }
  function go(i) {
    var m = st().activeMock; if (!m || i < 0 || i >= m.ids.length) return;
    m.cur = i; Store.save(); App.render();
  }
  function flag() {
    var m = st().activeMock; if (!m) return;
    m.flags[m.cur] = !m.flags[m.cur]; Store.save(); App.render();
  }
  function askSubmit() {
    var m = st().activeMock; if (!m) return;
    var open = m.answers.filter(function (a) { return a < 0; }).length;
    var flagged = m.flags.filter(Boolean).length;
    var text = (open ? open + " unanswered (they count as wrong). " : "All questions answered. ") +
      (flagged ? flagged + " flagged. " : "") + "You cannot change answers after submitting.";
    U.confirm("Submit the exam?", text, "Submit").then(function (yes) { if (yes) submit(); });
  }

  function renderRun(main) {
    var m = st().activeMock;
    if (!m) { location.replace(st().lastMock ? "#/exam/result" : "#/exam"); return; }
    var q = QB.get(m.ids[m.cur]);
    var n = m.ids.length;
    var answeredCount = m.answers.filter(function (a) { return a >= 0; }).length;

    main.appendChild(h("div", { class: "exam-bar" },
      h("span", { class: "tnum", text: "Question " + (m.cur + 1) + " of " + n }),
      h("span", { class: "clock-box" }, h("span", { class: "sr", text: "Time left " }),
        h("span", { id: "clock", class: "clock tnum", text: U.clock(m.deadline - Date.now()) })),
      h("button", { class: "btn small", type: "button", onclick: askSubmit }, "Submit")));

    var card = h("section", { class: "card qcard", "aria-labelledby": "qtext" });
    if (!q) {
      card.appendChild(h("p", { text: "This question is no longer in the question bank. Skip it." }));
    } else {
      card.appendChild(h("h2", { id: "qtext", class: "qtext", text: q.q }));
      var opts = h("div", { class: "opts", role: "group", "aria-label": "Options" });
      m.perms[m.cur].forEach(function (orig, di) {
        var on = m.answers[m.cur] === orig;
        opts.appendChild(h("button", { class: "opt" + (on ? " is-picked" : ""), type: "button", "aria-pressed": on ? "true" : "false", "data-fid": "o" + di,
          onclick: function () { select(orig); } },
          h("span", { class: "key", "aria-hidden": "true", text: U.letter(di) }),
          h("span", { class: "opt-t", text: q.options[orig].t })));
      });
      card.appendChild(opts);
    }
    var flagged = m.flags[m.cur];
    card.appendChild(h("div", { class: "row between actions" },
      h("button", { class: "btn ghost", type: "button", "data-fid": "prev", disabled: m.cur === 0, onclick: function () { go(m.cur - 1); } }, "Previous"),
      h("button", { class: "btn ghost flag-btn" + (flagged ? " on" : ""), type: "button", "aria-pressed": flagged ? "true" : "false", "data-fid": "flag", onclick: flag },
        h("span", { "aria-hidden": "true", text: "⚑ " }), flagged ? "Flagged" : "Flag"),
      m.cur + 1 < n
        ? h("button", { class: "btn", type: "button", "data-fid": "next", onclick: function () { go(m.cur + 1); } }, "Next")
        : h("button", { class: "btn", type: "button", onclick: askSubmit }, "Submit")));
    card.appendChild(h("p", { class: "muted small hint", text: "Keys: 1-4 or A-D answer, F flag, ← → move" }));
    main.appendChild(card);

    var nav = h("div", { class: "navgrid" });
    m.ids.forEach(function (id, i) {
      var a = m.answers[i] >= 0, f = m.flags[i];
      var label = "Question " + (i + 1) + (a ? ", answered" : ", not answered") + (f ? ", flagged" : "");
      nav.appendChild(h("button", { type: "button", class: "nav-cell" + (a ? " done" : "") + (f ? " flagged" : "") + (i === m.cur ? " cur" : ""),
        "aria-label": label, "aria-current": i === m.cur ? "true" : null, "data-fid": "n" + i, onclick: function () { go(i); } }, String(i + 1)));
    });
    main.appendChild(h("section", { class: "card", "aria-label": "Question navigator" },
      h("div", { class: "row between" },
        h("h2", { class: "h3", text: "Questions" }),
        h("span", { class: "muted small tnum", text: answeredCount + " answered · " + m.flags.filter(Boolean).length + " flagged" })),
      nav,
      h("p", { class: "legend small muted" },
        h("span", { class: "nav-cell done mini", "aria-hidden": "true" }), "answered ",
        h("span", { class: "nav-cell flagged mini", "aria-hidden": "true" }), "flagged ",
        h("span", { class: "nav-cell cur mini", "aria-hidden": "true" }), "current")));
  }

  function renderResult(main) {
    var m = st().lastMock;
    if (!m) { location.replace("#/exam"); return; }
    var items = m.ids.map(function (id, i) { return { q: QB.get(id), i: i }; }).filter(function (x) { return x.q; });
    var right = items.filter(function (x) { return m.answers[x.i] === x.q.answer; }).length;
    var p = U.pct(right, items.length), pass = p >= PASS;

    main.appendChild(h("h1", { text: MODES[m.mode].label + ": result" }));
    main.appendChild(h("div", { class: "card summary" },
      U.ring(right / (items.length || 1), p + "%", right + " / " + items.length),
      h("div", null,
        h("p", { class: "verdict-big " + (pass ? "pass" : "fail") },
          h("span", { "aria-hidden": "true", text: pass ? "✓ " : "✗ " }), pass ? "PASS" : "FAIL"),
        h("p", { class: "muted", text: "Pass mark " + PASS + "%. Time used " + U.clock(m.end - m.start) + "." }))));

    var table = h("table", { class: "tbl" }, h("caption", { text: "Score by phase" }),
      h("thead", null, h("tr", null, h("th", { scope: "col", text: "Phase" }), h("th", { scope: "col", class: "num", text: "Right" }), h("th", { scope: "col", class: "bar-col", text: "" }))));
    var tb = h("tbody");
    U.phases().forEach(function (ph) {
      var inP = items.filter(function (x) { var t = U.topic(x.q.topic); return t && t.phase === ph.id; });
      if (!inP.length) return;
      var r = inP.filter(function (x) { return m.answers[x.i] === x.q.answer; }).length;
      tb.appendChild(h("tr", null, h("td", { text: ph.name }), h("td", { class: "num tnum", text: r + " / " + inP.length + " (" + U.pct(r, inP.length) + "%)" }),
        h("td", { class: "bar-col" }, U.bar(r / inP.length, r / inP.length, ph.name + " " + U.pct(r, inP.length) + "%"))));
    });
    table.appendChild(tb);
    main.appendChild(h("div", { class: "card scroll-x" }, table));

    // Review every question with all explanations.
    var list = h("div", { class: "review-list" });
    function fill() {
      list.replaceChildren();
      items.forEach(function (x) {
        var a = m.answers[x.i], ok = a === x.q.answer;
        if (reviewFilter === "wrong" && ok) return;
        if (reviewFilter === "flagged" && !m.flags[x.i]) return;
        var t = U.topic(x.q.topic);
        list.appendChild(h("article", { class: "card" },
          h("p", { class: "chip-row" }, h("span", { class: "chip", text: "Q" + (x.i + 1) }), h("span", { class: "chip dim", text: t ? t.name : x.q.topic }),
            m.flags[x.i] ? h("span", { class: "chip flag", text: "⚑ flagged" }) : null),
          h("h3", { class: "qtext", text: x.q.q }),
          Quiz.explain(x.q, m.perms[x.i], a, true)));
      });
      if (!list.children.length) list.appendChild(h("p", { class: "muted", text: "Nothing to show for this filter." }));
    }
    var seg = h("div", { class: "seg", role: "radiogroup", "aria-label": "Show" });
    [["all", "All"], ["wrong", "Wrong"], ["flagged", "Flagged"]].forEach(function (f) {
      seg.appendChild(h("label", null, h("input", { type: "radio", name: "rf", value: f[0], checked: reviewFilter === f[0],
        onchange: function () { reviewFilter = f[0]; fill(); } }), h("span", { text: f[1] })));
    });
    main.appendChild(h("div", { class: "row between wrap review-head" }, h("h2", { text: "Review" }), seg));
    main.appendChild(list);
    fill();
    main.appendChild(h("div", { class: "row wrap" }, h("a", { class: "btn", href: "#/exam" }, "Another exam"), h("a", { class: "btn ghost", href: "#/" }, "Home")));
  }

  function onKey(e) {
    var m = st().activeMock; if (!m) return;
    var k = e.key.toLowerCase();
    var tag = e.target && e.target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    var idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (e.repeat && k !== "arrowright" && k !== "arrowleft") return;   // a held key must not toggle answer or flag on and off
    if (k.length === 1 && idx >= 0) { e.preventDefault(); select(m.perms[m.cur][idx]); }
    else if (k === "f") { e.preventDefault(); flag(); }
    else if (k === "arrowright") { e.preventDefault(); go(m.cur + 1); }
    else if (k === "arrowleft") { e.preventDefault(); go(m.cur - 1); }
  }

  return { renderSetup: renderSetup, renderRun: renderRun, renderResult: renderResult, tick: tick, onKey: onKey, history: history };
})();
