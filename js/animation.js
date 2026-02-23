document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  /* =========================
     Banner animation on page load
  ========================== */
  if (document.querySelector(".banner-text-side")) {
    const bannerTL = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
    });
    bannerTL
      .from(".banner-text-side h1", { y: -50, opacity: 0 })
      .from(".banner-text-side p", { y: -30, opacity: 0 }, "-=0.7")
      .from(".banner-btns", { y: -20, opacity: 0, stagger: 0.2 }, "-=0.5")
      .from(".banner-img-side", { opacity: 0 }, "-=0.8");
  }

  /* =========================
     Header fade-in animation
  ========================== */
  if (document.querySelector("header")) {
    gsap.from("header", { opacity: 0, duration: 1, ease: "power2.out" });
  }

  /* =========================
     Bootcamp section animation
  ========================== */
  if (document.querySelector("#bootcamp")) {
    const bootcampTL = gsap.timeline({
      scrollTrigger: { trigger: "#bootcamp", start: "top 80%" },
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
      .from("#bootcamp .more-sec", { y: 20, opacity: 0 }, "-=0.2");
  }

  /* =========================
     Choose Us section animation
  ========================== */
  if (document.querySelector("#choose-us")) {
    const chooseTL = gsap.timeline({
      scrollTrigger: { trigger: "#choose-us", start: "top 80%" },
      defaults: { duration: 0.8, ease: "power2.out" },
    });
    chooseTL
      .from(".choose-img-side img", { scale: 0.9, opacity: 0 })
      .from(".fly-small-card", { y: 30, opacity: 0 }, "-=0.4")
      .from("#choose-us .heading-left p", { y: -20, opacity: 0 }, "-=0.3")
      .from("#choose-us .heading-left h2", { y: -30, opacity: 0 }, "-=0.5")
      .from("#choose-us ul li", { x: -20, opacity: 0, stagger: 0.15 }, "-=0.3")
      .from("#choose-us .btn", { y: 20, opacity: 0 }, "-=0.2");
  }

  /* =========================
     Inner Page Banner animation
  ========================== */
  if (document.querySelector(".inner-page-banner")) {
    const innerBannerTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".inner-page-banner",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.9, ease: "power3.out" },
    });
    innerBannerTL
      .from(".inner-page-banner h2", { y: -40, opacity: 0 })
      .from(".inner-page-banner p", { y: -20, opacity: 0 }, "-=0.5");
  }

  /* =========================
     Features section animation
  ========================== */
  if (document.querySelector("#features-con")) {
    const featuresTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#features-con",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.8, ease: "power3.out" },
    });
    featuresTL.from(".Features-left-side", { opacity: 0 });
    featuresTL.from(".Features-right-side", { opacity: 0 }, "-=0.5");
    featuresTL.from(
      ".Features-right-side ul li",
      { opacity: 0, stagger: 0.15 },
      "-=0.3",
    );
  }

  /* =========================
     Statistics section animation
  ========================== */
  if (document.querySelector("#statistics")) {
    gsap.from("#statistics .statistics-block", {
      scrollTrigger: {
        trigger: "#statistics",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.utils
      .toArray("#statistics .statistics-block h2")
      .forEach((el, index) => {
        if (index === 3) return; // skip last block (24/7)
        const rawText = el.innerText;
        const number = parseInt(rawText.replace(/\D/g, ""));
        const suffix = rawText.replace(/[0-9]/g, "");
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: number,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate() {
              el.innerText = Math.floor(el.innerText) + suffix;
            },
          },
        );
      });
  }

  /* =========================
     Highlights section animation
  ========================== */
  if (document.querySelector("#high-section")) {
    gsap.utils.toArray("#high-section .number-block h2").forEach((el) => {
      const rawText = el.innerText;
      const number = parseInt(rawText.replace(/\D/g, ""));
      const suffix = rawText.replace(/[0-9]/g, "");
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: number,
          duration: 1.5,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate() {
            el.innerText = Math.floor(el.innerText) + suffix;
          },
        },
      );
    });
  }

  /* =========================
     Testimonial section animation
  ========================== */
  if (document.querySelector("#testimonial")) {
    const testimonialTL = gsap.timeline({
      scrollTrigger: { trigger: "#testimonial", start: "top 80%" },
      defaults: { duration: 1, ease: "power2.out" },
    });
    testimonialTL
      .from("#testimonial .heading-center p", { y: -20, opacity: 0 })
      .from("#testimonial .heading-center h2", { y: -30, opacity: 0 }, "-=0.5")
      .from(
        "#testimonial .swiper-slide",
        { y: 40, opacity: 0, stagger: 0.2 },
        "-=0.5",
      );
  }

  /* =========================
     Teachers section animation
  ========================== */
  if (document.querySelector("#teachers-con")) {
    const teachersTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#teachers-con",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.8, ease: "power2.out" },
    });
    teachersTL.from(".teachers .heading-center h2", { y: -40, opacity: 0 });
    teachersTL.from(
      ".teachers .heading-center .heading-des",
      { y: -20, opacity: 0 },
      "-=0.5",
    );
    teachersTL.from(
      ".teacher-block",
      { y: 30, opacity: 0, stagger: 0.2 },
      "-=0.3",
    );
  }

  /* =========================
     Courses section animation
  ========================== */
  if (document.querySelector(".courses")) {
    const coursesTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".courses",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    coursesTL
      .from(".courses .heading-left p", { y: -30, opacity: 0 })
      .from(".courses .heading-left h2", { y: -50, opacity: 0 }, "-=0.5");
  }
});
