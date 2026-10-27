// Runs in <head> before the stylesheet paints: applies a stored light/dark override.
// "system" (or no storage) leaves the attribute off, so prefers-color-scheme decides.
(function () {
  try {
    var s = JSON.parse(localStorage.getItem("lssgb-trainer.v1") || "{}");
    if (s.theme === "light" || s.theme === "dark") document.documentElement.setAttribute("data-theme", s.theme);
  } catch (e) { /* storage blocked or bad JSON: follow the system theme */ }
})();
