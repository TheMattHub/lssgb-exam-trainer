// Progress state: one versioned localStorage key, read back as untrusted data.
// Storage may be missing or throw (private mode, blocked site data): the app then runs from memory.
var Store = (function () {
  "use strict";
  var KEY = "lssgb-trainer.v1";
  // Leitner: days until a question is due again, by box 0-5. Box 0 = answered wrong, due now;
  // box 1+ is due from the start of that local day, so "after 1 day" means any time tomorrow.
  var INTERVAL_DAYS = [0, 1, 3, 7, 14, 30];
  var MASTERED_BOX = 3;
  var MAX_MOCKS = 20;
  var ID_RE = /^[A-Za-z0-9._-]{1,64}$/;
  // Round keys: "all" (Random mode), "t:<topic id>" or "p:<phase id>" (Topic mode).
  var ROUND_RE = /^(all|[tp]:[A-Za-z0-9._-]{1,64})$/;

  var storageOk = true;
  var state = clean(read());

  function fresh() {
    return { v: 1, theme: "system", q: Object.create(null), streak: { last: "", n: 0 }, mocks: [], activeMock: null, lastMock: null, rounds: Object.create(null) };
  }

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { storageOk = false; return null; }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); storageOk = true; }
    catch (e) { storageOk = false; }
  }

  function num(v, min, max, dflt) { return typeof v === "number" && isFinite(v) && v >= min && v <= max ? v : dflt; }
  function int(v, min, max, dflt) { return Number.isInteger(v) && v >= min && v <= max ? v : dflt; }

  // Copies only known keys with the right types; anything else is dropped.
  function clean(raw) {
    var s = fresh();
    if (!raw || typeof raw !== "object" || raw.v !== 1) return s;
    if (raw.theme === "light" || raw.theme === "dark") s.theme = raw.theme;
    if (raw.q && typeof raw.q === "object") {
      Object.keys(raw.q).slice(0, 20000).forEach(function (id) {
        var e = raw.q[id];
        if (!ID_RE.test(id) || !e || typeof e !== "object") return;
        s.q[id] = { box: int(e.box, 0, 5, 0), due: num(e.due, 0, 1e14, 0), last: num(e.last, 0, 1e14, 0),
          right: int(e.right, 0, 1e6, 0), wrong: int(e.wrong, 0, 1e6, 0), missed: e.missed === true };
      });
    }
    if (raw.streak && typeof raw.streak === "object" && /^\d{4}-\d{2}-\d{2}$/.test(raw.streak.last))
      s.streak = { last: raw.streak.last, n: int(raw.streak.n, 0, 100000, 0) };
    if (Array.isArray(raw.mocks)) {
      s.mocks = raw.mocks.slice(-MAX_MOCKS).filter(function (m) { return m && typeof m === "object"; }).map(function (m) {
        return { at: num(m.at, 0, 1e14, 0), mode: m.mode === "full" ? "full" : "quick", n: int(m.n, 0, 1000, 0), right: int(m.right, 0, 1000, 0) };
      }).filter(function (m) { return m.right <= m.n; });
    }
    if (raw.rounds && typeof raw.rounds === "object") {
      Object.keys(raw.rounds).slice(0, 100).forEach(function (k) {
        var r = cleanRound(raw.rounds[k]);
        if (ROUND_RE.test(k) && r) s.rounds[k] = r;
      });
    }
    s.activeMock = cleanMock(raw.activeMock);
    s.lastMock = cleanMock(raw.lastMock);
    return s;
  }

  // A round: a random order of question ids and the result (1 right, 0 wrong) of each one answered in it.
  function cleanRound(r) {
    if (!r || typeof r !== "object" || !Array.isArray(r.order) || r.order.length > 5000) return null;
    var out = { order: r.order.filter(function (id) { return typeof id === "string" && ID_RE.test(id); }),
      done: Object.create(null) };
    if (r.done && typeof r.done === "object") Object.keys(r.done).forEach(function (id) {
      if (ID_RE.test(id) && (r.done[id] === 0 || r.done[id] === 1)) out.done[id] = r.done[id];
    });
    return out;
  }

  function cleanMock(m) {
    if (!m || typeof m !== "object" || !Array.isArray(m.ids)) return null;
    var n = m.ids.length;
    if (n === 0 || n > 200 || !m.ids.every(function (id) { return typeof id === "string" && ID_RE.test(id); })) return null;
    var okPerm = function (p) { return Array.isArray(p) && p.length === 4 && [0, 1, 2, 3].every(function (i) { return p.indexOf(i) >= 0; }); };
    if (!Array.isArray(m.perms) || m.perms.length !== n || !m.perms.every(okPerm)) return null;
    if (!Array.isArray(m.answers) || m.answers.length !== n || !Array.isArray(m.flags) || m.flags.length !== n) return null;
    return {
      mode: m.mode === "full" ? "full" : "quick",
      ids: m.ids.slice(), perms: m.perms.map(function (p) { return p.slice(); }),
      answers: m.answers.map(function (a) { return int(a, -1, 3, -1); }),
      flags: m.flags.map(function (f) { return f === true; }),
      start: num(m.start, 0, 1e14, 0), deadline: num(m.deadline, 0, 1e14, 0), end: num(m.end, 0, 1e14, 0),
      cur: int(m.cur, 0, n - 1, 0)
    };
  }

  // Local midnight n days after t. Calendar arithmetic, not n * 24 h, so DST days (23 or 25 h) do not shift dates.
  function dayStart(t, n) {
    var d = new Date(t);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + n);
    return d.getTime();
  }

  function dayKey(t) {
    var d = new Date(t);
    var two = function (n) { return (n < 10 ? "0" : "") + n; };
    return d.getFullYear() + "-" + two(d.getMonth() + 1) + "-" + two(d.getDate());
  }

  function bumpStreak(now) {
    var today = dayKey(now), yesterday = dayKey(dayStart(now, -1));
    if (state.streak.last === today) return;
    state.streak.n = state.streak.last === yesterday ? state.streak.n + 1 : 1;
    state.streak.last = today;
  }

  // Records one answer in the Leitner state. Call save() after a batch.
  function record(id, correct, now) {
    now = now || Date.now();
    var e = state.q[id] || (state.q[id] = { box: 0, due: 0, last: 0, right: 0, wrong: 0, missed: false });
    if (correct) {
      e.right++;
      e.box = Math.min(5, e.box + 1);
    } else {
      e.wrong++;
      e.box = 0;
      e.missed = true;
    }
    e.due = e.box === 0 ? now : dayStart(now, INTERVAL_DAYS[e.box]);
    e.last = now;
    bumpStreak(now);
  }

  function entry(id) { return state.q[id]; }
  function isMastered(id) { var e = state.q[id]; return !!e && e.box >= MASTERED_BOX; }
  function isDueMistake(id, now) { var e = state.q[id]; return !!e && e.missed && e.due <= (now || Date.now()); }

  function streak() {
    var now = Date.now();
    return state.streak.last === dayKey(now) || state.streak.last === dayKey(dayStart(now, -1)) ? state.streak.n : 0;
  }
  function studiedToday() { return state.streak.last === dayKey(Date.now()); }

  function addMock(m) {
    state.mocks.push(m);
    if (state.mocks.length > MAX_MOCKS) state.mocks = state.mocks.slice(-MAX_MOCKS);
  }

  function exportJson() { return JSON.stringify(state, null, 1); }

  // Returns true when the text held usable progress; the current state is replaced.
  function importJson(text) {
    var raw;
    try { raw = JSON.parse(text); } catch (e) { return false; }
    if (!raw || raw.v !== 1) return false;
    state = clean(raw);
    save();
    return true;
  }

  function round(key) { return Object.prototype.hasOwnProperty.call(state.rounds, key) ? state.rounds[key] : null; }
  function setRound(key, r) { if (ROUND_RE.test(key)) state.rounds[key] = r; }
  // Latest answer per question: box 0 means the last answer was wrong, any higher box means right.
  function lastRight(id) { var e = state.q[id]; return !!e && e.box > 0; }

  function reset() { var theme = state.theme; state = fresh(); state.theme = theme; save(); }

  return {
    get: function () { return state; },
    save: save, record: record, entry: entry, isMastered: isMastered, isDueMistake: isDueMistake,
    round: round, setRound: setRound, lastRight: lastRight,
    streak: streak, studiedToday: studiedToday, addMock: addMock, exportJson: exportJson, importJson: importJson, reset: reset,
    storageOk: function () { return storageOk; }
  };
})();
