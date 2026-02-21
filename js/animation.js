document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  /* =========================
     Banner animation on load
  ========================== */
  const bannerTL = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out" },
  });

  bannerTL
    .from(".banner-text-side h1", { y: -50, opacity: 0 })
    .from(".banner-text-side p", { y: -30, opacity: 0 }, "-=0.7")
    .from(".banner-btns", { y: -20, opacity: 0, stagger: 0.2 }, "-=0.5")
    .from(".banner-img-side", { opacity: 0 }, "-=0.8");

  /* =========================
     Header fade-in
  ========================== */
  gsap.from("header", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  /* =========================
     Bootcamp section animation
  ========================== */
  const bootcampTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#bootcamp",
      start: "top 80%",
    },
    defaults: { duration: 0.8, ease: "power2.out" },
  });

  bootcampTL
    .from("#bootcamp .heading-center p", { y: -30, opacity: 0 })
    .from("#bootcamp .heading-center h2", { y: -50, opacity: 0 }, "-=0.5")
    .from(
      "#bootcamp .course-card",
      { y: 30, opacity: 0, stagger: 0.2 },
      "-=0.3",
    )
    .from("#bootcamp .more-sec", { y: 20, opacity: 0 }, "-=0.2"); // animate Read More

  /* =========================
     Choose Us section animation
  ========================== */
  const chooseTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#choose-us",
      start: "top 80%",
    },
    defaults: { duration: 0.8, ease: "power2.out" },
  });

  chooseTL
    .from(".choose-img-side img", { scale: 0.9, opacity: 0 })
    .from(".fly-small-card", { y: 30, opacity: 0 }, "-=0.4")
    .from("#choose-us .heading-left p", { y: -20, opacity: 0 }, "-=0.3")
    .from("#choose-us .heading-left h2", { y: -30, opacity: 0 }, "-=0.5")
    .from("#choose-us ul li", { x: -20, opacity: 0, stagger: 0.15 }, "-=0.3")
    .from("#choose-us .btn", { y: 20, opacity: 0 }, "-=0.2");

  /* =========================
     Highlights section animation
  ========================== */
  const highlightsTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#high-section",
      start: "top 80%",
    },
    defaults: { duration: 1, ease: "power2.out" },
  });

  highlightsTL
    .from(".heading-highlights h2", { y: -30, opacity: 0 })
    .from(".number-block", { y: 40, opacity: 0, stagger: 0.2 }, "-=0.5");

  /* =========================
     Testimonial section animation
  ========================== */
  const testimonialTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#testimonial",
      start: "top 80%",
    },
    defaults: { duration: 1, ease: "power2.out" },
  });

  // Section heading
  testimonialTL.from("#testimonial .heading-center p", { y: -20, opacity: 0 });
  testimonialTL.from(
    "#testimonial .heading-center h2",
    { y: -30, opacity: 0 },
    "-=0.5",
  );

  // Testimonial cards
  testimonialTL.from(
    "#testimonial .swiper-slide",
    { y: 40, opacity: 0, stagger: 0.2 },
    "-=0.5",
  );
});
