const navbarNav = document.querySelector(".navbar-nav");
// hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Untuk menghilangkan hamburger menu di luar icon
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
