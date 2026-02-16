const burger = document.querySelector(".btn-burger-menu");
const pullMenu = document.getElementById("pullMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  pullMenu.classList.toggle("pull-menu");
});
