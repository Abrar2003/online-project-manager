import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { useBreakpointValue } from "@chakra-ui/react";

ChartJS.register({
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
});

const options = {
  responsive: true,
  scales: {
    y: {
      grace: "10%",
    },
  },
  maintainAspectRatio: false,
};

function BarChart({ chartData }) {
const fontSize = useBreakpointValue({
    base: 10,
    md: 10,
    lg: 15,
    xl: 15
})

  ChartJS.defaults.font.size = fontSize;
//   ChartJS.defaults.font.weight = "bold";
  ChartJS.defaults.backgroundColor = "white";
  ChartJS.defaults.color = "black";
  ChartJS.defaults.datasets.bar.borderColor = "white";
  ChartJS.defaults.datasets.bar.borderWidth = 5;
  ChartJS.defaults.datasets.bar.barThickness = 20;

  return <Bar data={chartData} options={options} />;
}

export default BarChart;
