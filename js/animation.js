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
      toggleActions: "play none none none",
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
    );

  /* =========================
     Choose Us section animation
  ========================== */
  const chooseTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#choose-us",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    defaults: { duration: 0.8, ease: "power2.out" },
  });

  // Image + floating card
  chooseTL
    .from(".choose-img-side img", {
      scale: 0.9,
      opacity: 0,
    })
    .from(
      ".fly-small-card",
      {
        y: 30,
        opacity: 0,
      },
      "-=0.4",
    );

  // Text heading
  chooseTL
    .from("#choose-us .heading-left p", { y: -20, opacity: 0 }, "-=0.3")
    .from("#choose-us .heading-left h2", { y: -30, opacity: 0 }, "-=0.5");

  // List items
  chooseTL.from(
    "#choose-us ul li",
    {
      x: -20,
      opacity: 0,
      stagger: 0.15,
    },
    "-=0.3",
  );

  // Button
  chooseTL.from(
    "#choose-us .btn",
    {
      y: 20,
      opacity: 0,
    },
    "-=0.2",
  );
});
