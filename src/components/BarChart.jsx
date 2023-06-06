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
      beginAtZero: true,
      ticks:{
        stepSize: 1
      }
    },
  },
  plugins:{
    legend:{
      position: "bottom",
      display: false,
      labels:{
        useBorderRadius: true,
        borderRadius: 10,
        boxWidth: 20,
        boxHeight: 20
      }
    },
    customCanvasBackgroundColor: {
      color: 'red',
    }
  },
  maintainAspectRatio: false,
  elements:{
    bar: {
      borderRadius: 7
    }
  },
  layout: {
    autoPadding: false,
    padding: 20
  }
};

function BarChart({ chartData }) {
const fontSize = useBreakpointValue({
    base: 12,
    md: 15
})
const borderSize = useBreakpointValue({
  base: 3,
  md: 5
})
const barSize = useBreakpointValue({
  base: 12,
  md: 20
})

  ChartJS.defaults.font.size = fontSize;
  ChartJS.defaults.backgroundColor = "white";
  ChartJS.defaults.color = "black";
  ChartJS.defaults.datasets.bar.borderColor = "white";
  ChartJS.defaults.datasets.bar.borderWidth = borderSize;
  ChartJS.defaults.datasets.bar.barThickness = barSize;

  return <Bar data={chartData} options={options} />;
}

export default BarChart;
