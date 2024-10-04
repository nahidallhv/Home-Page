const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  burgerMenu.classList.toggle("toggle");
});
