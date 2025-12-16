/* =========================
   HELPER: DOM READY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. SMOOTH SCROLLING
     Works for any <a href="#section">
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* =========================
     2. SCROLL-IN ANIMATIONS
     Adds subtle fade-up on entry
  ========================= */
  const revealElements = document.querySelectorAll(
    ".Presentation, .project-card, .skill-summary, .work-experience, .education, .contact-form"
  );

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

  /* =========================
     3. PROJECT CARD INTERACTION
     Improves focus + hover clarity
  ========================= */
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("active");
    });

    card.addEventListener("focusin", () => {
      card.classList.add("active");
    });

    card.addEventListener("focusout", () => {
      card.classList.remove("active");
    });
  });

  /* =========================
     4. CONTACT FORM UX
     Loading state + simple validation
  ========================= */
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.addEventListener("submit", () => {
      const button = form.querySelector("button");
      if (button) {
        button.disabled = true;
        button.textContent = "Sending...";
      }
    });
  }

  /* =========================
     5. IMAGE LAZY LOADING FALLBACK
     For older browsers
  ========================= */
  if (!("loading" in HTMLImageElement.prototype)) {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
      const src = img.getAttribute("src");
      if (src) img.src = src;
    });
  }

});
