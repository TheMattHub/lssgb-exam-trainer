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

  // Horizontal bar with two segments (e.g. mastered / seen), shares 0..1. cls adds e.g. a phase colour class.
  function bar(a, b, label, cls) {
    var track = h("div", { class: "bar" + (cls ? " " + cls : ""), role: "img", "aria-label": label });
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

  // Phase identity: a letter badge (D M A I C) in the phase colour. The colour is never the only cue:
  // the badge carries the letter and always sits beside the phase name. Colours: --ph-* in css/app.css.
  function phaseClass(id) { return phaseMap.has(id) ? "ph-" + id : "ph-general"; }
  function phaseBadge(id, size) {
    var p = phaseMap.get(id);
    return h("span", { class: "ph-badge " + phaseClass(id) + (size ? " " + size : ""), "aria-hidden": "true", text: p ? p.name.charAt(0) : "G" });
  }

  // A few stroke icons (24 px grid), drawn inline so the page needs no icon font or image request.
  var ICONS = {
    shuffle: "M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
    layers: "M12 3 2 8l10 5 10-5-10-5ZM2 13l10 5 10-5M2 18l10 5 10-5",
    clock: "M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
    redo: "M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16M3 21v-5h5",
    book: "M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2.5ZM20 19v3H6",
    grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    flame: "M12 22c4 0 7-2.7 7-6.6 0-3.6-2.6-6.2-4.4-8.4-.4 2.2-1.6 3.6-3 4.1.3-3.3-1.1-6.6-3.6-9.1C8.3 6.3 5 9.3 5 15.4 5 19.3 8 22 12 22Z"
  };
  function icon(name) {
    var svg = s("svg", { viewBox: "0 0 24 24", class: "icon", "aria-hidden": "true", fill: "none", stroke: "currentColor",
      "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" });
    svg.appendChild(s("path", { d: ICONS[name] || "" }));
    return svg;
  }

  return { h: h, ring: ring, bar: bar, shuffle: shuffle, pct: pct, clock: clock,
    topic: topic, phase: phase, phases: phases, topicsOf: topicsOf, confirm: confirm, letter: letter, bonusTag: bonusTag,
    phaseClass: phaseClass, phaseBadge: phaseBadge, icon: icon };
})();
