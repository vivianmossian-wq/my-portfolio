const sections = document.querySelectorAll(
    ".home, .about, .services, .progects, .skills, .contact"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
});