const testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // Mobile
    0: {
      slidesPerView: 1,
    },
    // Tablet
    768: {
      slidesPerView: 2,
    },
    // Laptop / Desktop
    1024: {
      slidesPerView: 3,
    },
  },
});
