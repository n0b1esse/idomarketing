function createMonthlyTrendData() {
  return {
    labels: ["1 нед", "2 нед", "3 нед", "4 нед"],
    datasets: [
      {
        label: "MQL",
        data: [84, 102, 128, 146],
        borderColor: "rgba(111, 164, 255, 0.95)",
        backgroundColor: "rgba(111, 164, 255, 0.16)",
        tension: 0.38,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true
      }
    ]
  };
}

function createStatusData() {
  return {
    labels: ["Новые", "В работе", "SQL", "Won"],
    datasets: [
      {
        data: [38, 27, 21, 14],
        backgroundColor: [
          "rgba(126, 184, 255, 0.95)",
          "rgba(156, 122, 255, 0.9)",
          "rgba(94, 242, 226, 0.88)",
          "rgba(96, 255, 166, 0.9)"
        ],
        borderColor: "rgba(9, 20, 54, 0.65)",
        borderWidth: 2,
        hoverOffset: 6
      }
    ]
  };
}

function createBarData() {
  return {
    labels: ["SEO", "PPC", "ABM", "SMM", "Email"],
    datasets: [
      {
        label: "Лиды",
        data: [42, 58, 37, 29, 24],
        backgroundColor: [
          "rgba(120, 166, 255, 0.86)",
          "rgba(141, 111, 255, 0.84)",
          "rgba(107, 250, 232, 0.84)",
          "rgba(126, 184, 255, 0.72)",
          "rgba(102, 147, 255, 0.66)"
        ],
        borderRadius: 10,
        borderSkipped: false
      }
    ]
  };
}

function createCommonOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1100,
      easing: "easeOutQuart"
    },
    plugins: {
      legend: {
        labels: {
          color: "#e6ecff",
          boxWidth: 10,
          boxHeight: 10
        }
      }
    }
  };
}

function hideSkeleton(container) {
  container.classList.add("is-ready");
}

function renderWidget(widget) {
  if (!(window.Chart && widget instanceof HTMLElement)) return;
  if (widget.dataset.chartReady === "1") return;

  const canvas = widget.querySelector("canvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;

  const type = widget.dataset.chartType;
  const commonOptions = createCommonOptions();
  let config;

  if (type === "line") {
    config = {
      type: "line",
      data: createMonthlyTrendData(),
      options: {
        ...commonOptions,
        scales: {
          x: { ticks: { color: "#b6c5f7" }, grid: { color: "rgba(173, 191, 242, 0.12)" } },
          y: { ticks: { color: "#b6c5f7" }, grid: { color: "rgba(173, 191, 242, 0.12)" } }
        }
      }
    };
  } else if (type === "doughnut") {
    config = {
      type: "doughnut",
      data: createStatusData(),
      options: {
        ...commonOptions,
        cutout: "66%"
      }
    };
  } else if (type === "bar") {
    config = {
      type: "bar",
      data: createBarData(),
      options: {
        ...commonOptions,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#b6c5f7" }, grid: { display: false } },
          y: { ticks: { color: "#b6c5f7" }, grid: { color: "rgba(173, 191, 242, 0.12)" } }
        }
      }
    };
  }

  if (!config) return;

  window.Chart.defaults.font.family = 'Inter, "Segoe UI", Roboto, Arial, sans-serif';
  new window.Chart(canvas, config);
  widget.dataset.chartReady = "1";
  hideSkeleton(widget);
}

export function setupDashboardCharts() {
  const widgets = document.querySelectorAll("[data-chart-widget]");
  if (!widgets.length || !window.Chart) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        renderWidget(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  widgets.forEach((widget) => observer.observe(widget));
}
