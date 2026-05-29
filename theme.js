(function () {
  const KEY = "theme";

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(KEY, theme);
    updateToggle();
  }

  function updateToggle() {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    btn.textContent = isLight ? "☾" : "☀";
    btn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    btn.title = isLight ? "Dark mode" : "Light mode";
  }

  const stored = localStorage.getItem(KEY);
  apply(stored === "light" || stored === "dark" ? stored : "light");

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      apply(next);
    });
  });

})();
