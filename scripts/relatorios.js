import { Chart } from "@/components/ui/chart"
// Relatórios - JavaScript Vanilla Puro
// Chart.js é carregado via CDN no HTML

// Gráfico de Tendência de Vendas
const salesTrendCtx = document.getElementById("salesTrendChart")
if (salesTrendCtx) {
  new Chart(salesTrendCtx, {
    type: "line",
    data: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Vendas Semanais (R$)",
          data: [10500, 12300, 11800, 11290],
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
          display: true,
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
const periodFilterReports = document.getElementById("period-filter-reports")
if (periodFilterReports) {
  periodFilterReports.addEventListener("change", (e) => {
    console.log("Filtro de período alterado:", e.target.value)
  })
}
