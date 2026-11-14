document.querySelectorAll(".project-gallery").forEach((gallery) => {
    const images = [...gallery.querySelectorAll("img")];
    const dots = [...gallery.querySelectorAll(".gallery-dot")];

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            images.forEach((image, i) => { image.hidden = i !== index; });
            dots.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
        });
    });
});
