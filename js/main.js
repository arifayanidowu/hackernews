const navbarMenu = document.querySelector(".navbar__menu");
const icon1 = navbarMenu.querySelector(".navbar__menu-icons-1");
const icon2 = navbarMenu.querySelector(".navbar__menu-icons-2");
const icon3 = navbarMenu.querySelector(".navbar__menu-icons-3");
const collapsibleNavbar = document.querySelector("#collapsibleNavbar");
let targetId;

navbarMenu.addEventListener("click", e => {
  icon1.classList.toggle("active");
  icon2.classList.toggle("active");
  icon3.classList.toggle("active");
  collapsibleNavbar.classList.toggle("active");
});
