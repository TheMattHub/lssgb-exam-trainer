// Small shared helpers. All text goes into the DOM through text nodes; nothing here uses innerHTML.
var U = (function () {
  "use strict";

  // h("button", { class: "btn", onclick: fn, "aria-label": "x" }, "Text", childNode, [more])
  function h(tag, props) {
    var el = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === undefined || v === null || v === false) return;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
        else if (k === "hidden" || k === "disabled" || k === "checked") el[k] = !!v;
        else if (k === "value") el.value = v;
        else el.setAttribute(k, v === true ? "" : String(v));
      });
    }
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c === undefined || c === null || c === false) return;
    if (Array.isArray(c)) { c.forEach(function (x) { append(el, x); }); return; }
    el.appendChild(typeof c === "object" ? c : document.createTextNode(String(c)));
  }

  var SVG = "http://www.w3.org/2000/svg";
  function s(tag, attrs) {
    var el = document.createElementNS(SVG, tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    return el;
  }

  // Progress ring: share 0..1, label in the middle.
  function ring(share, label, sub) {
    var r = 34, c = 2 * Math.PI * r;
    var svg = s("svg", { viewBox: "0 0 84 84", class: "ring", "aria-hidden": "true" });
    svg.appendChild(s("circle", { cx: 42, cy: 42, r: r, class: "ring-track" }));
    var arc = s("circle", { cx: 42, cy: 42, r: r, class: "ring-fill", transform: "rotate(-90 42 42)",
      "stroke-dasharray": c.toFixed(1), "stroke-dashoffset": (c * (1 - Math.max(0, Math.min(1, share)))).toFixed(1) });
    svg.appendChild(arc);
    return h("div", { class: "ring-box" }, svg,
      h("div", { class: "ring-label" }, h("strong", { text: label }), sub ? h("span", { text: sub }) : null));
  }

  // Horizontal bar with two segments (e.g. mastered / seen), shares 0..1.
  function bar(a, b, label) {
    var track = h("div", { class: "bar", role: "img", "aria-label": label });
    var segA = h("span", { class: "bar-a" });
    var segB = h("span", { class: "bar-b" });
    segA.style.width = (Math.max(0, Math.min(1, a)) * 100).toFixed(1) + "%";
    segB.style.width = (Math.max(0, Math.min(1, b - a)) * 100).toFixed(1) + "%";
    track.appendChild(segA); track.appendChild(segB);
    return track;
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }

  function clock(ms) {
    var t = Math.max(0, Math.round(ms / 1000));
    var hh = Math.floor(t / 3600), mm = Math.floor((t % 3600) / 60), ss = t % 60;
    var two = function (n) { return (n < 10 ? "0" : "") + n; };
    return (hh ? hh + ":" + two(mm) : mm) + ":" + two(ss);
  }

  var topicMap = new Map(), phaseMap = new Map();
  if (window.DATA_STATUS && DATA_STATUS.topicsOk) {
    TOPICS.topics.forEach(function (t) { topicMap.set(t.id, t); });
    TOPICS.phases.forEach(function (p) { phaseMap.set(p.id, p); });
  }
  function topic(id) { return topicMap.get(id); }
  function phase(id) { return phaseMap.get(id); }
  function phases() { return DATA_STATUS.topicsOk ? TOPICS.phases : []; }
  function topicsOf(phaseId) { return DATA_STATUS.topicsOk ? TOPICS.topics.filter(function (t) { return t.phase === phaseId; }) : []; }

  // Modal confirm built on <dialog>; resolves true when the user presses OK.
  function confirm(title, text, okLabel) {
    var dlg = document.getElementById("dialog");
    document.getElementById("dialog-title").textContent = title;
    document.getElementById("dialog-text").textContent = text;
    document.getElementById("dialog-ok").textContent = okLabel || "OK";
    return new Promise(function (resolve) {
      dlg.returnValue = "";
      dlg.addEventListener("close", function onClose() {
        dlg.removeEventListener("close", onClose);
        resolve(dlg.returnValue === "ok");
      });
      dlg.showModal();
      document.getElementById("dialog-cancel").focus();
    });
  }

  function letter(i) { return "ABCD".charAt(i); }

  // Small tag for course-only topics (bok: false in data/topics.js).
  function bonusTag(t) {
    return t && t.bok === false ? h("span", { class: "tag bonus", title: "Course topic, not on the IASSC Green Belt exam", text: "bonus" }) : null;
  }

  return { h: h, ring: ring, bar: bar, shuffle: shuffle, pct: pct, clock: clock,
    topic: topic, phase: phase, phases: phases, topicsOf: topicsOf, confirm: confirm, letter: letter, bonusTag: bonusTag };
})();
