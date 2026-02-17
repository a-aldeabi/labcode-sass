const burger = document.querySelector(".btn-burger-menu");
const pullMenu = document.getElementById("pullMenu");
const searchBtn = document.getElementById("search-btn");
const searchbar = document.querySelector(".search-bar");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  pullMenu.classList.toggle("pull-menu");
});

searchBtn.addEventListener("click", () => {
  searchbar.classList.toggle("showbar");
});
