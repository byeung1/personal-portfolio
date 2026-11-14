(() => {
    const root = document.documentElement;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let preference = "system";

    try {
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") preference = saved;
    } catch {
        // Use the system setting when browser storage is unavailable.
    }

    function applyTheme() {
        root.dataset.theme = preference === "system"
            ? (systemTheme.matches ? "dark" : "light")
            : preference;
    }

    applyTheme();
    systemTheme.addEventListener("change", applyTheme);

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector(".theme-toggle");
        toggle.value = preference;
        toggle.addEventListener("change", () => {
            preference = toggle.value;
            applyTheme();
            try {
                localStorage.setItem("theme", preference);
            } catch {
                // Manual selection still works without browser storage.
            }
        });
    });
})();
