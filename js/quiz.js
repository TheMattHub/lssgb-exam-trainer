// Random, Topic and Review modes: one question at a time, select then confirm, then all explanations.
//
// Random and Topic modes work in persistent "rounds" (saved in Store): a random order of every question
// in scope; the ones not yet answered in the round come next, and the round ends when all are answered.
// Round keys: "all" (Random), "t:<topic>" or "p:<phase>" (Topic mode).
var Quiz = (function () {
  "use strict";
  var h = U.h;
  var card = null;      // question on screen: { ctx, id, perm, sel, chosen, anim }
  var review = null;    // review session: { ids, i, results, title, startedAt, endedAt }
  var backHref = "";    // where "Back to questions" on a learn page returns to

  // ---------- rounds ----------

  function scope(key) {
    if (key === "all") return QB.all();
    var kind = key.charAt(0), id = key.slice(2);
    return QB.all().filter(function (q) {
      if (kind === "t") return q.topic === id;
      var t = U.topic(q.topic); return !!t && t.phase === id;
    });
  }

  function roundTitle(key) {
    if (key === "all") return "Random";
    var id = key.slice(2);
    if (key.charAt(0) === "t") { var t = U.topic(id); return t ? t.name : id; }
    var p = U.phase(id); return (p ? p.name : id) + ": whole phase";
  }

  function newRound(key) {
    var r = { order: U.shuffle(scope(key).map(function (q) { return q.id; })), done: Object.create(null), start: Date.now() };
    Store.setRound(key, r); Store.save();
    return r;
  }

  // Returns the round for key, creating it on first use. Questions added to the bank since the round
  // began are slotted in at random places among the ones still to answer.
  function getRound(key) {
    var r = Store.round(key);
    if (!r) return newRound(key);
    var known = new Set(r.order);
    var added = scope(key).map(function (q) { return q.id; }).filter(function (id) { return !known.has(id); });
    if (added.length) {
      var first = r.order.findIndex(function (id) { return !(id in r.done); });
      if (first < 0) first = r.order.length;
      added.forEach(function (id) { r.order.splice(first + Math.floor(Math.random() * (r.order.length - first + 1)), 0, id); });
      Store.save();
    }
    return r;
  }

  // Progress of a round, counting only questions that still exist in the bank.
  function roundStatus(key) {
    var r = Store.round(key);
    var ids = scope(key).map(function (q) { return q.id; });
    var s = { total: ids.length, answered: 0, right: 0, started: !!r };
    if (r) ids.forEach(function (id) { if (id in r.done) { s.answered++; s.right += r.done[id]; } });
    return s;
  }

  function nextInRound(r) {
    return r.order.find(function (id) { return QB.has(id) && !(id in r.done); });
  }

  // ---------- review (Leitner) ----------

  function dueMistakes() {
    var now = Date.now();
    return QB.all().filter(function (q) { return Store.isDueMistake(q.id, now); });
  }

  function startReview(ids, title) {
    review = { ids: ids, i: 0, results: [], title: title, startedAt: Date.now(), endedAt: 0 };
    card = null;
    if (location.hash === "#/review/run") App.render(); else location.hash = "#/review/run";
  }

  // ---------- shared question flow ----------

  function freshCard(ctx, id) { return { ctx: ctx, id: id, perm: U.shuffle([0, 1, 2, 3]), sel: -1, chosen: -1, anim: false }; }

  function select(displayIdx) {
    if (!card || card.chosen >= 0) return;
    card.sel = displayIdx;
    App.render();
  }

  function confirm() {
    if (!card || card.chosen >= 0 || card.sel < 0) return;
    var q = QB.get(card.id); if (!q) return;
    card.chosen = card.perm[card.sel];
    card.anim = true;
    var ok = card.chosen === q.answer;
    Store.record(q.id, ok);
    if (card.ctx === "review") review.results.push({ id: q.id, topic: q.topic, ok: ok });
    else { var r = getRound(card.ctx); r.done[q.id] = ok ? 1 : 0; }
    Store.save();
    App.render();
    var go = document.getElementById("go"); if (go) go.focus({ preventScroll: true });
  }

  function next() {
    if (!card || card.chosen < 0) return;
    if (card.ctx === "review") {
      if (review.i + 1 >= review.ids.length) review.endedAt = Date.now(); else review.i++;
    }
    card = null;
    App.render();
    window.scrollTo(0, 0);
    var m = document.getElementById("main"); if (m) m.focus({ preventScroll: true });
  }

  // Header line, progress bar and the question card with options, Confirm/Next and feedback.
  function renderQuestion(main, q, headText, share, shareAfter, endLink) {
    var t = U.topic(q.topic);
    var done = card.chosen >= 0;
    var anim = card.anim ? " anim" : "";
    card.anim = false;   // animate on the confirming render only

    main.appendChild(h("div", { class: "qhead" }, h("span", { class: "muted tnum", text: headText }), endLink));
    main.appendChild(U.bar(share, shareAfter, headText));

    var box = h("section", { class: "card qcard", "aria-labelledby": "qtext" });
    box.appendChild(h("p", { class: "chip-row" }, h("span", { class: "chip", text: t ? t.name : q.topic }), U.bonusTag(t),
      h("span", { class: "chip dim", text: "Level " + q.level })));
    box.appendChild(h("h2", { id: "qtext", class: "qtext", text: q.q }));
    var opts = h("div", { class: "opts", role: "group", "aria-label": "Options" });
    card.perm.forEach(function (orig, di) {
      var cls = "opt", mark = U.letter(di);
      if (done) {
        if (orig === q.answer) { cls += " is-correct" + (orig === card.chosen ? anim : ""); mark = "✓"; }
        else if (orig === card.chosen) { cls += " is-wrong" + anim; mark = "✗"; }
        else cls += " is-other";
      } else if (di === card.sel) cls += " is-picked";
      opts.appendChild(h("button", { class: cls, type: "button", disabled: done, "data-fid": "o" + di,
        "aria-pressed": done ? null : String(di === card.sel), onclick: function () { select(di); } },
        h("span", { class: "key", "aria-hidden": "true", text: mark }),
        h("span", { class: "opt-t", text: q.options[orig].t }),
        done && orig === card.chosen ? h("span", { class: "sr", text: orig === q.answer ? " (your answer, correct)" : " (your answer, wrong)" }) : null,
        done && orig === q.answer && orig !== card.chosen ? h("span", { class: "sr", text: " (correct answer)" }) : null));
    });
    box.appendChild(opts);

    // Confirm and Next share one slot, so the row never changes size.
    var go = done
      ? h("button", { class: "btn", type: "button", id: "go", "data-fid": "go", onclick: next }, "Next")
      : h("button", { class: "btn", type: "button", id: "go", "data-fid": "go", disabled: card.sel < 0, onclick: confirm }, "Confirm");
    box.appendChild(h("div", { class: "row between actions" },
      h("span", { class: "muted small hint", text: done ? "Enter: next" : card.sel < 0 ? "Keys 1-4 or A-D to select" : "Enter: confirm · you can still change" }),
      go));

    var fb = h("div", { class: "feedback", "aria-live": "polite" });
    if (done) fb.appendChild(explain(q, card.perm, card.chosen, true));
    box.appendChild(fb);
    main.appendChild(box);
  }

  // Explanation block, shared with the exam review. perm maps displayed position -> original index.
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

  // ---------- views ----------

  function renderRound(main, key) {
    var title = roundTitle(key);
    if (!scope(key).length) {
      main.appendChild(h("h1", { text: title }));
      main.appendChild(emptyData());
      return;
    }
    var r = getRound(key);
    backHref = location.hash;
    if (!card || card.ctx !== key || (card.chosen < 0 && (card.id in r.done || !QB.has(card.id)))) {
      var id = nextInRound(r);
      card = id ? freshCard(key, id) : null;
    }
    var s = roundStatus(key);
    if (!card) { renderRoundDone(main, key, r, s); return; }
    var restart = h("button", { class: "quiet-link", type: "button", onclick: function () {
      U.confirm("Start a new round?", "The " + s.answered + " questions answered in this round go back into the pool. Your mistakes and review schedule stay.", "New round")
        .then(function (yes) { if (yes) { newRound(key); card = null; App.render(); } });
    } }, "New round");
    var answeredNow = s.answered - (card.chosen >= 0 ? 1 : 0);
    renderQuestion(main, QB.get(card.id), title + " · " + s.answered + " / " + s.total + " answered",
      answeredNow / s.total, s.answered / s.total, restart);
  }

  function renderRoundDone(main, key, r, s) {
    card = null;
    main.appendChild(h("h1", { text: roundTitle(key) + ": round complete" }));
    main.appendChild(h("div", { class: "card summary" },
      U.ring(s.total ? s.right / s.total : 0, U.pct(s.right, s.total) + "%", s.right + " / " + s.total),
      h("dl", { class: "facts" },
        h("dt", { text: "Right" }), h("dd", { class: "tnum", text: String(s.right) }),
        h("dt", { text: "Wrong" }), h("dd", { class: "tnum", text: String(s.total - s.right) }),
        h("dt", { text: "Mistakes due" }), h("dd", { class: "tnum", text: String(dueMistakes().length) }))));
    var results = scope(key).filter(function (q) { return q.id in r.done; }).map(function (q) { return { topic: q.topic, ok: r.done[q.id] === 1 }; });
    if (key.charAt(0) !== "t") main.appendChild(topicTable(results));
    var due = dueMistakes().length;
    main.appendChild(h("div", { class: "row wrap" },
      h("button", { class: "btn", type: "button", onclick: function () { newRound(key); App.render(); } }, "Start new round"),
      due ? h("a", { class: "btn ghost", href: "#/review" }, "Review mistakes (" + due + ")") : null,
      h("a", { class: "btn ghost", href: key === "all" ? "#/" : "#/topics" }, key === "all" ? "Home" : "All topics")));
  }

  function topicTable(results) {
    var byTopic = new Map();
    results.forEach(function (x) { var a = byTopic.get(x.topic) || { r: 0, n: 0 }; a.n++; if (x.ok) a.r++; byTopic.set(x.topic, a); });
    var rows = Array.from(byTopic.entries()).sort(function (a, b) { return a[1].r / a[1].n - b[1].r / b[1].n; });
    var table = h("table", { class: "tbl" }, h("caption", { text: "Result by topic, weakest first" }),
      h("thead", null, h("tr", null, h("th", { scope: "col", text: "Topic" }), h("th", { scope: "col", class: "num", text: "Right" }))));
    var tb = h("tbody");
    rows.forEach(function (e) {
      var t = U.topic(e[0]), name = t ? t.name : e[0];
      tb.appendChild(h("tr", null, h("td", null, LEARN.get(e[0]) ? h("a", { href: "#/learn/" + encodeURIComponent(e[0]) }, name) : name),
        h("td", { class: "num tnum", text: e[1].r + " / " + e[1].n })));
    });
    table.appendChild(tb);
    return h("div", { class: "card scroll-x" }, table);
  }

  // Per topic: total, answered (distinct, at least once), right and wrong by the latest answer.
  function topicStats(questions) {
    var s = { total: questions.length, answered: 0, right: 0, wrong: 0 };
    questions.forEach(function (q) {
      if (!Store.entry(q.id)) return;
      s.answered++;
      if (Store.lastRight(q.id)) s.right++; else s.wrong++;
    });
    return s;
  }

  function statBar(s, label) {
    var track = h("div", { class: "bar", role: "img", "aria-label": label });
    var a = h("span", { class: "bar-ok" }), b = h("span", { class: "bar-bad" });
    a.style.width = (s.total ? s.right / s.total * 100 : 0).toFixed(1) + "%";
    b.style.width = (s.total ? s.wrong / s.total * 100 : 0).toFixed(1) + "%";
    track.appendChild(a); track.appendChild(b);
    return track;
  }

  function statText(s) {
    return s.answered + " / " + s.total + " answered · " + s.right + " right · " + s.wrong + " wrong";
  }

  function renderTopics(main) {
    main.appendChild(h("h1", { text: "By topic" }));
    var all = QB.all();
    if (!all.length) { main.appendChild(emptyData()); return; }
    main.appendChild(h("p", { class: "muted", text: "Each topic or phase runs as its own round. Right and wrong count your latest answer to each question." }));
    U.phases().forEach(function (p) {
      var topics = U.topicsOf(p.id);
      var inPhase = all.filter(function (q) { var t = U.topic(q.topic); return t && t.phase === p.id; });
      var ps = topicStats(inPhase);
      var sec = h("section", { class: "card" },
        h("div", { class: "row between wrap phase-head" }, h("h2", { text: p.name }),
          inPhase.length ? h("a", { class: "btn ghost small", href: "#/phase/" + encodeURIComponent(p.id) }, "Whole phase (" + inPhase.length + ")") : null),
        h("p", { class: "small muted tnum", text: statText(ps) }));
      var ul = h("ul", { class: "topic-stats" });
      topics.forEach(function (t) {
        var s = topicStats(all.filter(function (q) { return q.topic === t.id; }));
        var name = s.total ? h("a", { href: "#/topic/" + encodeURIComponent(t.id) }, t.name) : h("span", { class: "muted", text: t.name });
        ul.appendChild(h("li", null,
          h("div", { class: "row between wrap" }, h("span", null, name, " ", U.bonusTag(t)),
            h("span", { class: "small muted tnum", text: s.total ? statText(s) : "no questions yet" })),
          statBar(s, t.name + ": " + statText(s))));
      });
      sec.appendChild(ul);
      main.appendChild(sec);
    });
    main.appendChild(h("p", { class: "legend small muted" },
      h("span", { class: "sw sw-ok", "aria-hidden": "true" }), "right ",
      h("span", { class: "sw sw-bad", "aria-hidden": "true" }), "wrong (latest answer)"));
  }

  function renderReviewStart(main) {
    var n = dueMistakes().length;
    main.appendChild(h("h1", { text: "Review mistakes" }));
    if (!n) {
      main.appendChild(h("div", { class: "card empty" },
        h("p", { text: "No mistakes are due for review. Questions you get wrong come back here the same day; after you answer them right they return after 1, 3, 7, 14 and 30 days." }),
        h("a", { class: "btn", href: "#/random" }, "Random questions")));
      return;
    }
    main.appendChild(h("div", { class: "card" },
      h("p", { text: n + (n === 1 ? " question is" : " questions are") + " due: ones you got wrong before. Each right answer moves it to a longer interval." }),
      h("button", { class: "btn big", type: "button", onclick: function () {
        startReview(U.shuffle(dueMistakes()).map(function (q) { return q.id; }), "Review mistakes");
      } }, "Start review")));
  }

  function renderReviewRun(main) {
    if (!review) { location.replace("#/review"); return; }
    backHref = "#/review/run";
    if (review.endedAt) { renderReviewDone(main); return; }
    while (review.i < review.ids.length && !QB.has(review.ids[review.i])) review.i++;
    if (review.i >= review.ids.length) { review.endedAt = Date.now(); renderReviewDone(main); return; }
    if (!card || card.ctx !== "review" || card.id !== review.ids[review.i]) card = freshCard("review", review.ids[review.i]);
    var n = review.ids.length, doneNow = review.i + (card.chosen >= 0 ? 1 : 0);
    renderQuestion(main, QB.get(card.id), review.title + " · " + (review.i + 1) + " of " + n, review.i / n, doneNow / n,
      h("a", { class: "quiet-link", href: "#/review", onclick: function () { review = null; card = null; } }, "End review"));
  }

  function renderReviewDone(main) {
    card = null;
    var r = review.results, right = r.filter(function (x) { return x.ok; }).length;
    var missed = r.filter(function (x) { return !x.ok; }).map(function (x) { return x.id; });
    main.appendChild(h("h1", { text: review.title + ": done" }));
    main.appendChild(h("div", { class: "card summary" },
      U.ring(r.length ? right / r.length : 0, U.pct(right, r.length) + "%", right + " / " + r.length),
      h("dl", { class: "facts" },
        h("dt", { text: "Time" }), h("dd", { class: "tnum", text: U.clock(review.endedAt - review.startedAt) }),
        h("dt", { text: "Missed" }), h("dd", { class: "tnum", text: String(missed.length) }))));
    if (r.length) main.appendChild(topicTable(r));
    main.appendChild(h("div", { class: "row wrap" },
      missed.length ? h("button", { class: "btn", type: "button", onclick: function () { startReview(U.shuffle(missed), "Retry missed"); } },
        "Retry the " + missed.length + " I missed") : null,
      h("a", { class: "btn ghost", href: "#/", onclick: function () { review = null; } }, "Home")));
  }

  function emptyData() {
    return h("div", { class: "card empty" }, h("p", { text: "No questions are loaded yet. Question packs go in data/questions/ (see docs/CONTENT_GUIDE.md)." }));
  }

  // Keyboard: 1-4 or A-D select; Enter confirms, Enter again goes to the next question.
  // Enter on another control (a link, "New round") keeps its normal action.
  function onKey(e) {
    if (!card) return;
    var k = e.key.toLowerCase();
    var idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
    if (k.length === 1 && idx >= 0) { if (card.chosen < 0) { e.preventDefault(); select(idx); } return; }
    if (k !== "enter" && k !== " ") return;
    var el = e.target, tag = el && el.tagName;
    var ours = tag === "BODY" || tag === "MAIN" || (tag === "BUTTON" && /^(o\d|go)$/.test(el.getAttribute("data-fid") || ""));
    if (!ours || (k === " " && tag === "BUTTON")) return;
    e.preventDefault();
    if (card.chosen >= 0) next(); else confirm();
  }

  return { renderRound: renderRound, renderTopics: renderTopics, renderReviewStart: renderReviewStart, renderReviewRun: renderReviewRun,
    explain: explain, dueMistakes: dueMistakes, roundStatus: roundStatus, topicStats: topicStats, onKey: onKey, emptyData: emptyData,
    backHref: function () { return backHref; } };
})();
