<script>
import Chart from "chart.js/auto";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Chart",
  setup() {
    onMounted(() => {
      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
          datasets: [
            {
              label: "This month",
              data: [
                0, 2000, 4000, 5000, 10000, 15000, 24000, 20000, 22000, 26000,
              ],
              borderColor: "#7445FB",
              backgroundColor: "#7445FB",
              borderWidth: 2,
              font: {
                family: "'SF Pro Display', 'sans-serif'",
              },
            },
            {
              label: "Last month",
              data: [
                0, 2000, 5000, 16000, 15000, 12000, 10000, 8000, 5000, 8000,
              ],
              borderWidth: 1,
              borderColor: "#C8C8CA",
              backgroundColor: "#C8C8CA",
              borderDash: [4, 2],
              font: {
                family: "'SF Pro Display', 'sans-serif'",
              },
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0,
              hitRadius: 4,
              hoverRadius: 6,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              font: {
                family: "'SF Pro Display', 'sans-serif'",
              },
              grid: {
                borderDash: [2, 2],
                color: "#AEAEAF",
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                  if (value === 0) {
                    return value;
                  } else {
                    return String(value).slice(0, -3) + "K";
                  }
                },
              },
            },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                useBorderRadius: true,
                boxWidth: 12,
                borderRadius: 6,
                // This more specific font property overrides the global property
                font: {
                  family: "'SF Pro Display', 'sans-serif'",
                },
              },
            },
          },
        },
      });
    });
  },
};
</script>

<template>
  <canvas id="myChart"></canvas>
</template>

<style></style>
