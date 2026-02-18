// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // 👇 DEJA DE OBSERVAR DESPUÉS DE MOSTRARLO
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(
  ".about, .testimonial-card, .menu-section, .menu-item, .event-box"
).forEach(el => observer.observe(el));


// ===============================
// PARALLAX HERO
// ===============================

const hero = document.querySelector(".hero");

function heroParallax() {
  if (window.innerWidth > 768) {
    const y = window.scrollY * 0.4;
    hero.style.backgroundPosition = `center ${y}px`;
  } else {
    hero.style.backgroundPosition = "center";
  }
}

window.addEventListener("scroll", heroParallax);
window.addEventListener("resize", heroParallax);


// ===============================
// SCROLL SUAVE
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
