// Router (hash based, so back, refresh and file:// all work), Home and Settings.
var App = (function () {
  "use strict";
  var h = U.h;
  var main = document.getElementById("main");
  var route = "";

  function parse() {
    var parts = location.hash.replace(/^#\/?/, "").split("?")[0].split("/").filter(Boolean);
    try { return parts.map(decodeURIComponent); } catch (e) { return []; }
  }

  var ROUTES = {
    "": [renderHome, "Home"],
    "random": [function (m) { Quiz.renderRound(m, "all"); }, "Random", "random"],
    "topics": [Quiz.renderTopics, "By topic", "topics"],
    "review": [Quiz.renderReviewStart, "Review mistakes"],
    "review/run": [Quiz.renderReviewRun, "Review mistakes"],
    "exam": [Mock.renderSetup, "Exam", "exam"],
    "exam/run": [Mock.renderRun, "Exam", "exam"],
    "exam/result": [Mock.renderResult, "Exam result", "exam"],
    "learn": [Learn.renderIndex, "Learn", "learn"],
    "settings": [renderSettings, "Settings", "settings"]
  };

  // Re-renders the current view. Focus stays on the control with the same data-fid,
  // so keyboard users do not lose their place when a view redraws itself.
  function render() {
    var parts = parse();
    var key = parts.join("/");
    var entry = Object.prototype.hasOwnProperty.call(ROUTES, key) ? ROUTES[key] : null;
    var view, title, nav;
    if (entry) { view = entry[0]; title = entry[1]; nav = entry[2]; }
    else if (parts[0] === "learn" && parts.length === 2) {
      view = function (m) { Learn.renderTopic(m, parts[1]); };
      var t = U.topic(parts[1]); title = t ? t.name : "Learn"; nav = "learn";
    } else if ((parts[0] === "topic" && U.topic(parts[1]) || parts[0] === "phase" && U.phase(parts[1])) && parts.length === 2) {
      var roundKey = parts[0].charAt(0) + ":" + parts[1];
      view = function (m) { Quiz.renderRound(m, roundKey); };
      title = parts[0] === "topic" ? U.topic(parts[1]).name : U.phase(parts[1]).name; nav = "topics";
    } else { view = renderHome; title = "Home"; key = ""; }

    var active = document.activeElement;
    var fid = active && main.contains(active) ? active.getAttribute("data-fid") : null;
    var changed = key !== route;
    route = key;

    main.replaceChildren();
    view(main);
    document.title = title === "Home" ? "LSSGB Exam Trainer" : title + " · LSSGB Exam Trainer";
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === nav) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    showNotice();

    if (changed) { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
    else if (fid) {
      var again = Array.prototype.find.call(main.querySelectorAll("[data-fid]"), function (el) { return el.getAttribute("data-fid") === fid; });
      if (again && !again.disabled) again.focus({ preventScroll: true });
    }
  }

  function showNotice() {
    var n = document.getElementById("notice");
    var msgs = [];
    if (!DATA_STATUS.topicsOk) msgs.push("data/topics.js did not load, so no topics are available.");
    if (!Store.storageOk()) msgs.push("This browser blocks storage: progress lasts only until you close the tab. Use Settings → Export to keep it.");
    n.textContent = msgs.join(" ");
    n.hidden = msgs.length === 0;
  }

  // ---------- Home ----------

  function stats(questions) {
    var s = { total: questions.length, seen: 0, mastered: 0, right: 0, wrong: 0 };
    questions.forEach(function (q) {
      var e = Store.entry(q.id); if (!e) return;
      s.seen++; s.right += e.right; s.wrong += e.wrong;
      if (e.box >= 3) s.mastered++;
    });
    return s;
  }

  function renderHome(m) {
    var all = QB.all();
    var s = stats(all);
    var due = Quiz.dueMistakes().length;
    var streak = Store.streak();

    m.appendChild(h("h1", { class: "sr", text: "LSSGB Exam Trainer" }));
    m.appendChild(h("section", { class: "card summary", "aria-label": "Your progress" },
      U.ring(s.total ? s.mastered / s.total : 0, U.pct(s.mastered, s.total) + "%", "mastered"),
      h("dl", { class: "facts" },
        h("dt", { text: "Streak" }), h("dd", { class: "tnum" }, streak + (streak === 1 ? " day" : " days"),
          streak && !Store.studiedToday() ? h("span", { class: "small muted", text: " · answer one today to keep it" }) : null),
        h("dt", { text: "Seen" }), h("dd", { class: "tnum", text: s.seen + " of " + s.total + " questions" }),
        h("dt", { text: "Accuracy" }), h("dd", { class: "tnum", text: s.right + s.wrong ? U.pct(s.right, s.right + s.wrong) + "%" : "–" }))));

    var tiles = h("nav", { class: "tiles", "aria-label": "Modes" });
    var rs = Quiz.roundStatus("all");
    tiles.appendChild(tile("#/random", "Random", rs.started ? rs.answered + " / " + rs.total + " answered in this round" : "All " + rs.total + " questions in random order"));
    tiles.appendChild(tile("#/topics", "By topic", "One topic or phase at a time, with your score per topic"));
    tiles.appendChild(tile("#/exam", "Exam (IASSC rules)", Store.get().activeMock ? "Exam in progress: resume" : "100 questions, 3 hours, pass mark 70%"));
    tiles.appendChild(tile("#/review", "Review mistakes", due ? due + " due now" : "Nothing due", due ? String(due) : null));
    tiles.appendChild(tile("#/learn", "Learn", "Notes, formulas and exam traps by topic", null, "wide"));
    m.appendChild(tiles);

    var phases = h("section", { class: "card" }, h("h2", { text: "Progress by phase" }));
    var list = h("div", { class: "phase-rows" });
    U.phases().forEach(function (p) {
      var ids = new Set(U.topicsOf(p.id).map(function (t) { return t.id; }));
      var ps = stats(all.filter(function (q) { return ids.has(q.topic); }));
      var acc = ps.right + ps.wrong ? U.pct(ps.right, ps.right + ps.wrong) + "% right" : "not started";
      list.appendChild(h("div", { class: "phase-row" },
        h("div", { class: "row between" }, h("strong", { text: p.name }),
          h("span", { class: "small muted tnum", text: ps.total ? ps.seen + "/" + ps.total + " seen · " + acc + " · " + ps.mastered + " mastered" : "no questions yet" })),
        U.bar(ps.total ? ps.mastered / ps.total : 0, ps.total ? ps.seen / ps.total : 0,
          p.name + ": " + ps.mastered + " mastered, " + ps.seen + " seen of " + ps.total)));
    });
    phases.appendChild(list);
    phases.appendChild(h("p", { class: "legend small muted" },
      h("span", { class: "sw sw-a", "aria-hidden": "true" }), "mastered (right 3+ times in a row) ",
      h("span", { class: "sw sw-b", "aria-hidden": "true" }), "seen"));
    m.appendChild(phases);

    var hist = Mock.history(5);
    if (hist) m.appendChild(hist);
    if (!all.length) m.appendChild(Quiz.emptyData());
  }

  function tile(href, title, sub, badge, extra) {
    return h("a", { class: "tile" + (extra ? " " + extra : ""), href: href },
      h("span", { class: "tile-title" }, title, badge ? h("span", { class: "badge", text: badge }) : null),
      h("span", { class: "tile-sub", text: sub }));
  }

  // ---------- Settings ----------

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") document.documentElement.setAttribute("data-theme", theme);
    else document.documentElement.removeAttribute("data-theme");
  }

  function renderSettings(m) {
    var st = Store.get();
    m.appendChild(h("h1", { text: "Settings" }));

    var seg = h("div", { class: "seg", role: "radiogroup", "aria-label": "Theme" });
    [["system", "System"], ["light", "Light"], ["dark", "Dark"]].forEach(function (o) {
      seg.appendChild(h("label", null, h("input", { type: "radio", name: "theme", value: o[0], checked: st.theme === o[0],
        onchange: function () { st.theme = o[0]; Store.save(); applyTheme(o[0]); } }), h("span", { text: o[1] })));
    });
    m.appendChild(h("section", { class: "card" }, h("h2", { text: "Theme" }), seg));

    var status = h("p", { class: "small muted", role: "status" });
    var file = h("input", { type: "file", accept: ".json,application/json", class: "sr", id: "import-file", onchange: function () {
      var f = file.files && file.files[0]; if (!f) return;
      if (f.size > 5e6) { status.textContent = "That file is too large to be a progress file."; return; }
      U.confirm("Replace your progress?", "The progress in this browser is replaced by the file " + f.name + ".", "Import").then(function (yes) {
        if (!yes) { file.value = ""; return; }
        var r = new FileReader();
        r.onload = function () {
          var ok = Store.importJson(String(r.result));
          applyTheme(Store.get().theme);
          render();
          var s2 = document.querySelector("[role=status]");
          if (s2) s2.textContent = ok ? "Progress imported." : "That file is not a progress export from this trainer.";
        };
        r.readAsText(f);
      });
    } });
    m.appendChild(h("section", { class: "card" },
      h("h2", { text: "Progress" }),
      h("p", { class: "muted", text: "Progress is kept in this browser only. Export it to a file to move it to another device or browser, then import it there." }),
      h("div", { class: "row wrap" },
        h("button", { class: "btn", type: "button", onclick: exportProgress }, "Export progress"),
        h("label", { class: "btn ghost", for: "import-file" }, "Import progress"), file,
        h("button", { class: "btn danger", type: "button", onclick: function () {
          U.confirm("Reset all progress?", "Answers, mistakes, streak and mock history are deleted from this browser. Export first if you may want them back.", "Reset").then(function (yes) {
            if (yes) { Store.reset(); render(); var s2 = document.querySelector("[role=status]"); if (s2) s2.textContent = "Progress reset."; }
          });
        } }, "Reset progress")),
      status));

    var skipped = DATA_STATUS.skipped.length;
    m.appendChild(h("section", { class: "card" }, h("h2", { text: "Question bank" }),
      h("p", { class: "muted tnum", text: QB.all().length + " questions and " + LEARN.all().length + " learn pages loaded" +
        (skipped ? "; " + skipped + " items skipped because they break the content format (run node tools/validate.mjs)." : ".") })));
  }

  function exportProgress() {
    var blob = new Blob([Store.exportJson()], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var d = new Date();
    var a = h("a", { href: url, download: "lssgb-progress-" + d.toISOString().slice(0, 10) + ".json" });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  // ---------- wiring ----------

  window.addEventListener("hashchange", render);
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || document.getElementById("dialog").open) return;
    if (route === "exam/run") Mock.onKey(e);
    else if (route === "random" || route === "review/run" || /^(topic|phase)\//.test(route)) Quiz.onKey(e);
  });
  setInterval(Mock.tick, 1000);

  render();
  Mock.tick();   // an exam whose time ran out while the tab was closed is submitted now
  return { render: render };
})();
