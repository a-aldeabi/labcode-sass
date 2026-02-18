document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Banner animation on page load
  const bannerTL = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  // Animate banner title
  bannerTL
    .from(".banner-text-side h1", { y: -50, opacity: 0 })
    .from(".banner-text-side p", { y: -30, opacity: 0 }, "-=0.7")
    .from(".banner-btns", { y: -20, opacity: 0, stagger: 0.2 }, "-=0.5")
    .from(".banner-img-side", { opacity: 0 }, "-=0.8");

  // Header fade-in on page load
  gsap.from("header", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Bootcamp section animation on scroll
  const bootcampTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#bootcamp",
      start: "top 80%",
      toggleActions: "play none none none",
      // markers: true, // optional for debugging
    },
    defaults: { duration: 0.8, ease: "power2.out" },
  });

  // Animate heading
  bootcampTL
    .from("#bootcamp .heading-center p", { y: -30, opacity: 0 })
    .from("#bootcamp .heading-center h2", { y: -50, opacity: 0 }, "-=0.5");

  // Animate each course card with stagger
  bootcampTL.from(
    "#bootcamp .course-card",
    { y: 30, opacity: 0, stagger: 0.2 },
    "-=0.3",
  );

  // Images and buttons inside cards will not animate
});
