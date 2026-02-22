// Burger menu toggle
const burger = document.querySelector(".btn-burger-menu");
const pullMenu = document.getElementById("pullMenu");
if (burger && pullMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    pullMenu.classList.toggle("pull-menu");
  });
}

// Search bar toggle
const searchBtn = document.getElementById("search-btn");
const searchbar = document.querySelector(".search-bar");
if (searchBtn && searchbar) {
  searchBtn.addEventListener("click", () => {
    searchbar.classList.toggle("showbar");
  });
}

// Video modal
const videoBtn = document.getElementById("video-btn");
const videoModal = document.getElementById("video-modal");
const video = document.getElementById("myVideo");
const closeVideo = document.getElementById("close-video-btn");
if (videoBtn && videoModal && video && closeVideo) {
  videoBtn.addEventListener("click", () => {
    videoModal.classList.add("showvideo");
    video.muted = false;
    video.play();
  });

  closeVideo.addEventListener("click", () => {
    videoModal.classList.remove("showvideo");
    video.pause();
    video.currentTime = 0;
  });
}

// Move top button
const moveTopBtn = document.querySelector(".move-top-btn");
if (moveTopBtn) {
  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      moveTopBtn.classList.add("active");
    } else {
      moveTopBtn.classList.remove("active");
    }
  });

  // Smooth scroll to top on click
  moveTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
