// Active menu highlight on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, header");
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === sec.getAttribute("id")) {
          link.classList.add("active");
        }
      });
    }
  });
});
