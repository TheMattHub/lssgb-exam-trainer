// Practice and review sessions: setup, one question at a time with feedback, session summary.
var Quiz = (function () {
  "use strict";
  var h = U.h;
  var session = null;          // the running session; kept in memory so "Read: topic" and back resumes it
  var lastPick = null;         // remembered setup choices: { topics: Set, length }

  // ---------- question selection ----------

  function topicAccuracy() {
    var acc = new Map();
    QB.all().forEach(function (q) {
      var e = Store.entry(q.id); if (!e) return;
      var a = acc.get(q.topic) || { r: 0, w: 0 };
      a.r += e.right; a.w += e.wrong; acc.set(q.topic, a);
    });
    return function (t) { var a = acc.get(t); return a && a.r + a.w ? a.r / (a.r + a.w) : 1; };
  }

  // Due mistakes first, then unseen, then the rest by weakest topic; random within each group.
  function order(pool) {
    var now = Date.now(), due = [], unseen = [], rest = [];
    pool.forEach(function (q) {
      if (Store.isDueMistake(q.id, now)) due.push(q);
      else if (!Store.entry(q.id)) unseen.push(q);
      else rest.push(q);
    });
    var acc = topicAccuracy();
    U.shuffle(rest).sort(function (a, b) { return acc(a.topic) - acc(b.topic); }); // sort is stable: random within a topic
    return U.shuffle(due).concat(U.shuffle(unseen), rest);
  }

  function dueMistakes() {
    var now = Date.now();
    return QB.all().filter(function (q) { return Store.isDueMistake(q.id, now); });
  }

  // ---------- session lifecycle ----------

  function start(ids, title, kind) {
    session = { ids: ids, title: title, kind: kind, i: 0, perm: null, chosen: -1, results: [], startedAt: Date.now(), endedAt: 0 };
    newShowing();
    if (location.hash === "#/practice/run") App.render(); else location.hash = "#/practice/run";
  }

  function startTopics(topicIds, length) {
    var set = new Set(topicIds);
    var qs = order(QB.all().filter(function (q) { return set.has(q.topic); }));
    if (length) qs = qs.slice(0, length);
    if (!qs.length) return;
    var name = topicIds.length === 1 && U.topic(topicIds[0]) ? U.topic(topicIds[0]).name : "Practice";
    start(qs.map(function (q) { return q.id; }), name, "practice");
  }

  function startReview() {
    var qs = U.shuffle(dueMistakes());
    if (!qs.length) { location.hash = "#/review"; return; }
    start(qs.map(function (q) { return q.id; }), "Review mistakes", "review");
  }

  function newShowing() {
    session.perm = U.shuffle([0, 1, 2, 3]);   // options reshuffled each time a question is shown
    session.chosen = -1;
  }

  function current() { return QB.get(session.ids[session.i]); }

  function answer(displayIdx) {
    if (!session || session.chosen >= 0 || session.endedAt) return;
    var q = current(); if (!q) return;
    var orig = session.perm[displayIdx];
    session.chosen = orig;
    var ok = orig === q.answer;
    session.results.push({ id: q.id, topic: q.topic, ok: ok });
    Store.record(q.id, ok); Store.save();
    session.justAnswered = true;   // animate only this render, not a later redraw
    App.render();
  }

  function next() {
    if (!session || session.chosen < 0) return;
    if (session.i + 1 >= session.ids.length) { session.endedAt = Date.now(); }
    else { session.i++; newShowing(); }
    App.render();
    var m = document.getElementById("main"); if (m) m.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  // ---------- views ----------

  function renderSetup(main) {
    var all = QB.all();
    var counts = new Map();
    all.forEach(function (q) { counts.set(q.topic, (counts.get(q.topic) || 0) + 1); });
    if (!lastPick) lastPick = { topics: new Set(all.map(function (q) { return q.topic; })), length: 10 };
    var pick = lastPick;

    main.appendChild(h("h1", { text: "Practice" }));
    if (!all.length) { main.appendChild(emptyData()); return; }

    var countLine = h("p", { class: "muted", "aria-live": "polite" });
    var startBtn = h("button", { class: "btn big", type: "button", onclick: function () {
      startTopics(Array.from(pick.topics), pick.length);
    } }, "Start");

    function selected() { return all.filter(function (q) { return pick.topics.has(q.topic); }).length; }
    function refresh() {
      var n = selected();
      var len = pick.length ? Math.min(pick.length, n) : n;
      countLine.textContent = n ? len + " of " + n + " questions in the selected topics" : "Select at least one topic with questions.";
      startBtn.disabled = n === 0;
      phaseBoxes.forEach(function (pb) {
        var avail = pb.topics.filter(function (t) { return counts.get(t.id); });
        var on = avail.filter(function (t) { return pick.topics.has(t.id); }).length;
        pb.box.checked = avail.length > 0 && on === avail.length;
        pb.box.indeterminate = on > 0 && on < avail.length;
      });
    }

    var phaseBoxes = [];
    var groups = h("div", { class: "topic-groups" });
    U.phases().forEach(function (p) {
      var topics = U.topicsOf(p.id);
      var total = topics.reduce(function (s, t) { return s + (counts.get(t.id) || 0); }, 0);
      var topicInputs = [];
      var pbox = h("input", { type: "checkbox", disabled: total === 0, onchange: function () {
        topics.forEach(function (t) { if (counts.get(t.id)) { if (pbox.checked) pick.topics.add(t.id); else pick.topics.delete(t.id); } });
        topicInputs.forEach(function (ti) { ti.checked = pick.topics.has(ti.dataset.topic); });
        refresh();
      } });
      phaseBoxes.push({ box: pbox, topics: topics });
      var list = h("div", { class: "topic-list" });
      topics.forEach(function (t) {
        var n = counts.get(t.id) || 0;
        var input = h("input", { type: "checkbox", "data-topic": t.id, disabled: n === 0, checked: n > 0 && pick.topics.has(t.id),
          onchange: function () { if (input.checked) pick.topics.add(t.id); else pick.topics.delete(t.id); refresh(); } });
        topicInputs.push(input);
        list.appendChild(h("label", { class: "check" + (n ? "" : " off") }, input, h("span", null, t.name, " ", U.bonusTag(t)), h("span", { class: "count", text: String(n) })));
      });
      groups.appendChild(h("details", { class: "card group", open: total > 0 },
        h("summary", null, h("label", { class: "check phase-check" }, pbox, h("strong", { text: p.name }), h("span", { class: "count", text: total + " questions" }))),
        list));
    });

    var lengths = h("div", { class: "seg", role: "radiogroup", "aria-label": "Session length" });
    [[10, "10"], [20, "20"], [0, "All"]].forEach(function (opt) {
      lengths.appendChild(h("label", null,
        h("input", { type: "radio", name: "len", value: String(opt[0]), checked: pick.length === opt[0],
          onchange: function () { pick.length = opt[0]; refresh(); } }),
        h("span", { text: opt[1] })));
    });

    main.appendChild(groups);
    main.appendChild(h("div", { class: "card setup-foot" },
      h("div", { class: "row wrap" }, h("span", { class: "label", text: "Questions" }), lengths),
      countLine, startBtn));
    refresh();
  }

  function renderReviewStart(main) {
    var n = dueMistakes().length;
    main.appendChild(h("h1", { text: "Review mistakes" }));
    if (!n) {
      main.appendChild(h("div", { class: "card empty" },
        h("p", { text: "No mistakes are due for review. Questions you get wrong come back here the same day; after you answer them right they return after 1, 3, 7, 14 and 30 days." }),
        h("a", { class: "btn", href: "#/practice" }, "Practice")));
      return;
    }
    main.appendChild(h("div", { class: "card" },
      h("p", { text: n + (n === 1 ? " question is" : " questions are") + " due: ones you got wrong before. Each right answer moves it to a longer interval." }),
      h("button", { class: "btn big", type: "button", onclick: startReview }, "Start review")));
  }

  function renderRun(main) {
    if (!session) { location.replace("#/practice"); return; }
    if (session.endedAt) { renderSummary(main); return; }
    var q = current();
    if (!q) { session.endedAt = Date.now(); renderSummary(main); return; }
    var t = U.topic(q.topic);
    var answered = session.chosen >= 0;
    var n = session.ids.length;
    var anim = session.justAnswered ? " anim" : "";
    session.justAnswered = false;

    main.appendChild(h("div", { class: "qhead" },
      h("span", { class: "muted tnum", text: session.title + " · " + (session.i + 1) + " of " + n }),
      h("a", { class: "quiet-link", href: "#/practice", onclick: function () { session = null; } }, "End session")));
    main.appendChild(U.bar(session.i / n, (session.i + (answered ? 1 : 0)) / n, "Progress"));

    var card = h("section", { class: "card qcard", "aria-labelledby": "qtext" });
    card.appendChild(h("p", { class: "chip-row" }, h("span", { class: "chip", text: t ? t.name : q.topic }), h("span", { class: "chip dim", text: "Level " + q.level })));
    card.appendChild(h("h2", { id: "qtext", class: "qtext", text: q.q }));
    var opts = h("div", { class: "opts", role: "group", "aria-label": "Options" });
    session.perm.forEach(function (orig, di) {
      var cls = "opt";
      if (answered) {
        if (orig === q.answer) cls += " is-correct" + (orig === session.chosen ? anim : "");
        else if (orig === session.chosen) cls += " is-wrong" + anim;
        else cls += " is-other";
      }
      var mark = answered && orig === q.answer ? "✓" : answered && orig === session.chosen ? "✗" : U.letter(di);
      opts.appendChild(h("button", { class: cls, type: "button", disabled: answered, "aria-keyshortcuts": String(di + 1),
        onclick: function () { answer(di); } },
        h("span", { class: "key", "aria-hidden": "true", text: mark }),
        h("span", { class: "opt-t", text: q.options[orig].t }),
        answered && orig === session.chosen ? h("span", { class: "sr", text: orig === q.answer ? " (your answer, correct)" : " (your answer, wrong)" }) : null,
        answered && orig === q.answer && orig !== session.chosen ? h("span", { class: "sr", text: " (correct answer)" }) : null));
    });
    card.appendChild(opts);

    var nextBtn = h("button", { class: "btn", type: "button", id: "next", disabled: !answered, onclick: next },
      session.i + 1 >= n ? "See results" : "Next");
    card.appendChild(h("div", { class: "row between actions" },
      h("span", { class: "muted small hint", text: answered ? "Enter: next" : "Keys 1-4 or A-D" }),
      nextBtn));

    var fb = h("div", { class: "feedback", "aria-live": "polite" });
    if (answered) fb.appendChild(explain(q, session.perm, session.chosen, true));
    card.appendChild(fb);
    main.appendChild(card);
    if (answered) nextBtn.focus({ preventScroll: true });
  }

  // Explanation block, shared with the mock review. perm maps displayed position -> original index.
  function explain(q, perm, chosen, withRead) {
    var pos = function (orig) { return U.letter(perm.indexOf(orig)); };
    var ok = chosen === q.answer;
    var box = h("div", { class: "explain" + (ok ? " ok" : " bad") });
    var verdict = chosen < 0 ? "Not answered" : ok ? "Correct" : "Wrong";
    box.appendChild(h("p", { class: "verdict" },
      h("span", { class: "verdict-icon", "aria-hidden": "true", text: ok ? "✓" : "✗" }),
      h("strong", { text: verdict }),
      ok ? null : h("span", { text: " · the answer is " + pos(q.answer) })));
    function item(orig, cls) {
      return h("div", { class: "why " + cls },
        h("span", { class: "why-key", text: pos(orig) }),
        h("div", null, h("p", { class: "why-t", text: q.options[orig].t }), h("p", { class: "why-text", text: q.options[orig].why })));
    }
    if (chosen >= 0) box.appendChild(item(chosen, ok ? "main good" : "main badw"));
    if (!ok) box.appendChild(item(q.answer, "good"));
    var others = [0, 1, 2, 3].filter(function (o) { return o !== q.answer && o !== chosen; })
      .sort(function (a, b) { return perm.indexOf(a) - perm.indexOf(b); });
    var otherBox = h("div", { class: "others" }, h("p", { class: "label", text: "Other options" }));
    others.forEach(function (o) { otherBox.appendChild(item(o, "compact")); });
    box.appendChild(otherBox);
    var t = U.topic(q.topic);
    var foot = h("p", { class: "small muted ref" }, "Source: " + (q.ref || "-"));
    if (withRead !== false && LEARN.get(q.topic)) {
      foot.appendChild(document.createTextNode(" · "));
      foot.appendChild(h("a", { href: "#/learn/" + encodeURIComponent(q.topic) }, "Read: " + (t ? t.name : q.topic)));
    }
    box.appendChild(foot);
    return box;
  }

  function renderSummary(main) {
    var r = session.results, right = r.filter(function (x) { return x.ok; }).length;
    var missed = r.filter(function (x) { return !x.ok; }).map(function (x) { return x.id; });
    main.appendChild(h("h1", { text: session.title + ": done" }));
    var top = h("div", { class: "card summary" },
      U.ring(r.length ? right / r.length : 0, U.pct(right, r.length) + "%", right + " / " + r.length),
      h("dl", { class: "facts" },
        h("dt", { text: "Time" }), h("dd", { class: "tnum", text: U.clock(session.endedAt - session.startedAt) }),
        h("dt", { text: "Missed" }), h("dd", { class: "tnum", text: String(missed.length) }),
        h("dt", { text: "Streak" }), h("dd", { class: "tnum", text: Store.streak() + (Store.streak() === 1 ? " day" : " days") })));
    main.appendChild(top);

    var byTopic = new Map();
    r.forEach(function (x) { var a = byTopic.get(x.topic) || { r: 0, n: 0 }; a.n++; if (x.ok) a.r++; byTopic.set(x.topic, a); });
    var rows = Array.from(byTopic.entries()).sort(function (a, b) { return a[1].r / a[1].n - b[1].r / b[1].n; });
    var table = h("table", { class: "tbl" }, h("caption", { text: "Result by topic, weakest first" }),
      h("thead", null, h("tr", null, h("th", { scope: "col", text: "Topic" }), h("th", { scope: "col", class: "num", text: "Right" }))));
    var tb = h("tbody");
    rows.forEach(function (e) {
      var t = U.topic(e[0]);
      tb.appendChild(h("tr", null, h("td", null, LEARN.get(e[0]) ? h("a", { href: "#/learn/" + encodeURIComponent(e[0]) }, t ? t.name : e[0]) : (t ? t.name : e[0])),
        h("td", { class: "num tnum", text: e[1].r + " / " + e[1].n })));
    });
    table.appendChild(tb);
    main.appendChild(h("div", { class: "card scroll-x" }, table));

    var acts = h("div", { class: "row wrap" });
    if (missed.length) acts.appendChild(h("button", { class: "btn", type: "button", onclick: function () {
      start(U.shuffle(missed.slice()), "Retry missed", "retry");
    } }, "Retry the " + missed.length + " I missed"));
    acts.appendChild(h("a", { class: "btn ghost", href: "#/practice", onclick: function () { session = null; } }, "New practice"));
    acts.appendChild(h("a", { class: "btn ghost", href: "#/", onclick: function () { session = null; } }, "Home"));
    main.appendChild(acts);
  }

  function emptyData() {
    return h("div", { class: "card empty" }, h("p", { text: "No questions are loaded yet. Question packs go in data/questions/ (see docs/CONTENT_GUIDE.md)." }));
  }

  // Keyboard: 1-4 or A-D answer; Enter or Space goes on (when focus is not on another control).
  function onKey(e) {
    if (!session || session.endedAt) return;
    var k = e.key.toLowerCase();
    var idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (k.length === 1 && idx >= 0 && session.chosen < 0) { e.preventDefault(); answer(idx); return; }
    var tag = e.target && e.target.tagName;
    if ((k === "enter" || k === " ") && session.chosen >= 0 && tag !== "BUTTON" && tag !== "A" && tag !== "INPUT") {
      e.preventDefault(); next();
    }
  }

  return { renderSetup: renderSetup, renderRun: renderRun, renderReviewStart: renderReviewStart, startTopics: startTopics,
    explain: explain, order: order, dueMistakes: dueMistakes, onKey: onKey, emptyData: emptyData,
    active: function () { return !!session && !session.endedAt; } };
})();
