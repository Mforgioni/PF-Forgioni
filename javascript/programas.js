const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const iconBars = document.querySelector(".fa-bars");
const iconTimes = document.querySelector(".fa-times");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  iconBars.style.display = navMenu.classList.contains("nav-menu_visible")
    ? "none"
    : "block";
  iconTimes.style.display = navMenu.classList.contains("nav-menu_visible")
    ? "block"
    : "none";
});

