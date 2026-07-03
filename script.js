// ============================================
// PROJECT TABS
// ============================================
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    document
      .querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`)
      .classList.add("active");
  });
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinksEl.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinksEl.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinksEl.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ============================================
// SCROLL REVEAL — fade/slide sections in as they enter view
// ============================================
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealEls.forEach((el) => revealObserver.observe(el));

// ============================================
// SCROLL SPY — highlight active nav link
// ============================================
const sections = document.querySelectorAll("main .section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinkEls.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
);

sections.forEach((section) => spyObserver.observe(section));

// ============================================
// FOOTER QUOTE ROTATION
// // ============================================
// const quotes = [
//   "Turning data into decisions.",
//   "Structured thinking, clear metrics.",
//   "From raw data to a clear next step.",
//   "Built on evidence, not assumptions.",
// ];

// const footerQuoteEl = document.getElementById("footerQuote");
// let quoteIndex = 0;

// if (footerQuoteEl) {
//   setInterval(() => {
//     quoteIndex = (quoteIndex + 1) % quotes.length;
//     footerQuoteEl.style.opacity = 0;
//     setTimeout(() => {
//       footerQuoteEl.textContent = quotes[quoteIndex];
//       footerQuoteEl.style.opacity = 1;
//     }, 250);
//   }, 4500);
//   footerQuoteEl.style.transition = "opacity 0.25s ease";
// }

// ============================================
// FOOTER YEAR
// ============================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================
// BACK TO TOP BUTTON
// ============================================
const toTopBtn = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("visible", window.scrollY > 500);
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
