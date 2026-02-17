const burger = document.querySelector(".btn-burger-menu");
const pullMenu = document.getElementById("pullMenu");
const searchBtn = document.getElementById("search-btn");
const searchbar = document.querySelector(".search-bar");
const videoBtn = document.getElementById("video-btn");
const videoModal = document.getElementById("video-modal");
const video = document.getElementById("myVideo");
const closeVideo = document.getElementById("close-video-btn");

// Burger menu toggle
burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  pullMenu.classList.toggle("pull-menu");
});

// Search bar toggle
searchBtn.addEventListener("click", () => {
  searchbar.classList.toggle("showbar");
});

// Open video modal
videoBtn.addEventListener("click", () => {
  videoModal.classList.add("showvideo");
  video.muted = false;
  video.play();
});

// Close video modal
closeVideo.addEventListener("click", () => {
  videoModal.classList.remove("showvideo");
  video.pause();
  video.currentTime = 0;
});
