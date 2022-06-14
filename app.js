const nav_toggle = document.getElementById("nav-toggle");
const nav_links = document.getElementById("nav-links");

nav_toggle.addEventListener("click", () => {
  nav_links.classList.toggle("show-nav");
});

// fixed nav
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) nav.classList.add("fixed");
  else nav.classList.remove("fixed");
});
