import { setupRevealAnimations } from "./modules/animations.js";
import { setupDashboardCharts } from "./modules/charts.js";

document.addEventListener("DOMContentLoaded", () => {
  setupBackgroundVideo();
  setupMobileNav();
  setupRevealAnimations();
  setupCounters();
  setupTabs();
  setupAccordion();
  setupPortfolioFilters();
  setupLoadMore();
  setupExitIntentPopup();
  setupForms();
  setupDashboardCharts();
});

function setupBackgroundVideo() {
  const video = document.querySelector(".video-bg video");
  if (!video) return;
  video.muted = true;
  const tryPlay = () => video.play().catch(() => {});
  tryPlay();
  video.addEventListener("canplay", tryPlay, { once: true });
}

function setupMobileNav() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-main-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter-target]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = Number(el.dataset.counterTarget || 0);
    const suffix = el.dataset.counterSuffix || "";
    let value = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const timer = setInterval(() => {
      value += step;
      if (value >= target) {
        value = target;
        clearInterval(timer);
      }
      el.textContent = `${value}${suffix}`;
    }, 22);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => observer.observe(el));
}

function setupTabs() {
  const wrappers = document.querySelectorAll("[data-tabs]");
  wrappers.forEach((wrap) => {
    const buttons = wrap.querySelectorAll("[data-tab-button]");
    const panels = wrap.querySelectorAll("[data-tab-panel]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.tabButton;
        buttons.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const panel = wrap.querySelector(`[data-tab-panel="${id}"]`);
        if (panel) panel.classList.add("active");
      });
    });
  });
}

function setupAccordion() {
  const headers = document.querySelectorAll("[data-accordion-toggle]");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      if (item) item.classList.toggle("open");
    });
  });
}

function setupPortfolioFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]");
  if (!filterButtons.length) return;
  const items = document.querySelectorAll("[data-case-category]");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      items.forEach((item) => {
        const ok = category === "all" || item.dataset.caseCategory === category;
        item.style.display = ok ? "block" : "none";
      });
    });
  });
}

function setupLoadMore() {
  const button = document.querySelector("[data-load-more]");
  if (!button) return;
  const hiddenItems = () => Array.from(document.querySelectorAll(".masonry-item.hidden"));
  button.addEventListener("click", () => {
    hiddenItems()
      .slice(0, 3)
      .forEach((item) => item.classList.remove("hidden"));
    if (!hiddenItems().length) button.style.display = "none";
  });
}

function setupExitIntentPopup() {
  const popup = document.querySelector("[data-exit-popup]");
  if (!popup) return;
  const close = popup.querySelector("[data-popup-close]");
  const storageKey = "exitIntentPopupShown";
  let shown = false;

  const markShown = () => {
    shown = true;
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch (_) {
      // Ignore storage errors (private mode, etc.)
    }
  };

  // Prevent re-show in the same browser session.
  try {
    shown = sessionStorage.getItem(storageKey) === "1";
  } catch (_) {
    shown = false;
  }

  const startedAt = Date.now();
  document.addEventListener("mouseout", (event) => {
    if (shown) return;
    if (!(event instanceof MouseEvent)) return;

    // Avoid immediate popups caused by initial layout/mouse transitions.
    if (Date.now() - startedAt < 5000) return;

    // Show only when the pointer leaves the document (relatedTarget=null)
    // and it happens at the top edge (classic "exit intent").
    if (event.relatedTarget !== null) return;
    if (event.clientY <= 0) {
      popup.classList.add("open");
      markShown();
    }
  });

  close?.addEventListener("click", () => {
    popup.classList.remove("open");
    markShown();
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("open");
      markShown();
    }
  });
}

function setupForms() {
  document.querySelectorAll("[data-crm-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Placeholder for CRM webhook integration (Telegram/Email).
      console.log("CRM payload:", data);
      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
      form.reset();
    });
  });
}
