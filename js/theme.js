(() => {
    const root = document.documentElement;
    try {
        root.dataset.theme = localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch {
        root.dataset.theme = "dark";
    }

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".theme-toggle");
        function updateToggle() {
            const dark = root.dataset.theme === "dark";
            toggle.setAttribute("aria-pressed", String(dark));
            toggle.title = dark ? "Switch to light mode" : "Switch to dark mode";
        }
        updateToggle();
        toggle.addEventListener("click", () => {
            root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
            try {
                localStorage.setItem("theme", root.dataset.theme);
            } catch {
                // The toggle still works when browser storage is unavailable.
            }
            updateToggle();
        });
    });
})();
