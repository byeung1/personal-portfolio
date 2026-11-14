const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
        if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
            link.setAttribute("aria-current", "location");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    },
    {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

setActiveLink("home");
