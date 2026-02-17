// ================================
// Banner Timeline
// ================================
const bannerTL = gsap.timeline({
  defaults: { duration: 1, ease: "power2.out" },
});

// Animate the title
bannerTL
  .from(".banner-text-side h1", { y: -50, opacity: 0 })

  // Animate the paragraph slightly after the title
  .from(".banner-text-side p", { y: -30, opacity: 0 }, "-=0.7")

  // Animate the buttons
  .from(".banner-btns ", { y: -20, opacity: 0, stagger: 0.2 }, "-=0.5")

  // Animate the banner image side wrapper with fade only
  .from(".banner-img-side", { opacity: 0 }, "-=0.8");

// ================================
// Header fade-in only
// ================================
gsap.from("header", {
  opacity: 0, // starts invisible
  duration: 1,
  ease: "power2.out",
});
