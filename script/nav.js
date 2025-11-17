document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!navbar || !navToggle) return;

    navToggle.addEventListener("click", () => {
navbar.classList.toggle("is-open");
navToggle.classList.toggle("is-active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        navbar.classList.remove("is-open");
        navToggle.classList.remove("is-active");
      });
    });
  });