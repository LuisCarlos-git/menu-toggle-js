const menuBox = document.querySelector(".menu-box");
const sideBarMenu = document.querySelector(".nav-mobile");

menuBox.addEventListener("click", () => {
  menuBox.classList.toggle("x-menu");
  sideBarMenu.classList.toggle("menu-open");
});
