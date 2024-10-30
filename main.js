window.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
  }
});

window.addEventListener("submit", (e) => {
  alert("Formulário enviado com sucesso!");
  e.preventDefault();
  e.target.reset();
});

const sliders = document.querySelectorAll(".slide-from-top, .slide-from-bottom, .slide-from-left, .slide-from-right");

const slideOnView = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === sliders[0]) {
        entry.target.classList.add("slide");
      } else if (entry.intersectionRatio >= 0.7) {
        entry.target.classList.add("slide");
        slideOnView.unobserve(entry.target);
      }
    });
  },
  {
    threshold: [0, 0.7],
  }
);

sliders.forEach((slider) => {
  slideOnView.observe(slider);
});
