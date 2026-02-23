document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const cards = document.querySelectorAll(".course-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.textContent.trim();

      cards.forEach((card) => {
        const cardCategory = card.dataset.category;
        const shouldShow = category === "All" || cardCategory === category;

        if (shouldShow) {
          card.style.display = "block";
          gsap.fromTo(
            card,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.35, ease: "power1.out" },
          );
        } else {
          gsap.to(card, {
            scale: 0,
            opacity: 0,
            duration: 0.35,
            ease: "power1.in",
            onComplete: () => {
              card.style.display = "none";
            },
          });
        }
      });
    });
  });
});
