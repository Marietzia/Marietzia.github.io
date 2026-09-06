const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

if (!prefersReducedMotion) {
  const heroImage = document.querySelector(".hero__image");
  const matchImage = document.querySelector(".match__image");
  let ticking = false;

  const parallax = () => {
    const y = window.scrollY;
    if (heroImage) heroImage.style.transform = `scale(1.06) translateY(${y * 0.045}px)`;
    if (matchImage) {
      const rect = matchImage.parentElement.getBoundingClientRect();
      const offset = Math.max(-80, Math.min(80, -rect.top * 0.05));
      matchImage.style.transform = `scale(1.06) translateY(${offset}px)`;
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(parallax);
      ticking = true;
    }
  }, { passive: true });

  const cursor = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  }, { passive: true });
}
