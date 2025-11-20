import { Chart } from "@/components/ui/chart"
// Dashboard - JavaScript Vanilla Puro
// Chart.js é carregado via CDN no HTML

// Gráfico de Vendas
const ctx = document.getElementById("salesChart")
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"],
      datasets: [
        {
          label: "Vendas (R$)",
          data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 38000, 45890],
          borderColor: "#990053",
          backgroundColor: "rgba(153, 0, 83, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (value) => "R$ " + value.toLocaleString("pt-BR"),
          },
        },
      },
    },
  })
}

// Filtro de Período
const periodFilter = document.getElementById("period-filter")
if (periodFilter) {
  periodFilter.addEventListener("change", (e) => {
    console.log("Filtro alterado para:", e.target.value)
  })
}
