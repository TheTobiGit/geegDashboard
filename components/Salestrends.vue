<template>
  <section
    class="h-[374px] border border-[#E5EAEF] p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1D]  dark:border-[#2A2A2A] w-[99.5%]"
  >
    <div class="flex items-center justify-between">
      <p class="text-lg font-semibold">Sales Trends</p>
      <div class="relative flex items-center gap-3">
        <p>Short by :</p>
        <select
          name="range"
          id="range"
          class="border-2 rounded-full appearance-none pl-3 pr-5 py-2 text-sm dark:bg-[#181818] dark:border-[#2A2A2A] dark:text-[#A3A3A3] focus:outline-none"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly" selected>Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <Icon
          name="ph:caret-down-light"
          class="absolute right-0 -translate-x-2 dark:text-[#A3A3A3]"
        />
      </div>
    </div>

    <div class="h-[92%] w-full ">
      <Bar ref="barChart" :data="chartData" :options="chartOptions" class="" />
    </div>
  </section>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales Trends",
      backgroundColor: "#EBFAF6",
      data: [6.0, 11.0, 3.0, 22.0, 8.0, 45.0, 9.0, 18.0, 32.0, 7.0, 30.0, 22.0],
      borderRadius: 100,
    },
  ],
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: true,
      },
    },
  },
});

</script>
