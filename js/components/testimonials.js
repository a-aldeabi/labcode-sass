// Array of testimonials
const testimonials = [
  {
    name: "Khalid Al-Mansour",
    role: "Full Stack Developer",
    avatar: "avatar1.png",
    text: "The courses here helped me transition from a beginner to a confident web developer in just a few months. The mentors are always supportive and practical.",
  },
  {
    name: "Nour Hossam",
    role: "UI/UX Designer",
    avatar: "avatar2.png",
    text: "I loved the hands-on projects! They really prepared me for real-world design challenges and improved my portfolio significantly.",
  },
  {
    name: "Youssef Farah",
    role: "Digital Marketing Specialist",
    avatar: "avatar3.png",
    text: "The instructors explain everything clearly and step by step. I was able to create effective campaigns and learn analytics in a practical way.",
  },
  {
    name: "Layla Ahmed",
    role: "Content Creator",
    avatar: "avatar4.png",
    text: "This platform gave me the confidence to start my own blog and create high-quality content. The learning path is very structured and easy to follow.",
  },
];

// Select Swiper wrapper
const swiperWrapper = document.querySelector(
  ".testimonial-swiper .swiper-wrapper",
);

// Generate slides dynamically
testimonials.forEach((item) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.innerHTML = `
    <div class="testimonial-card">
      <p class="testmonial-des">${item.text}</p>
      <div class="user-block">
        <img src="img/testmonial-avatars/${item.avatar}" alt="${item.name}, ${item.role} student" />
        <div class="user-text">
          <h3>${item.name}</h3>
          <p>${item.role}</p>
        </div>
      </div>
    </div>
  `;
  swiperWrapper.appendChild(slide);
});

// Initialize Swiper
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 30,
  autoHeight: true, // adjusts height according to active slide
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
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
