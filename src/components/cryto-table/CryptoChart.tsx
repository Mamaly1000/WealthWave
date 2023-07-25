import { useEffect, useState } from "react";
import type { ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { motion } from "framer-motion";
import ReactApexChart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = faker.random.arrayElement(colors);
  const colorMid = faker.random.arrayElement(
    colors.filter((color) => color !== colorStart)
  );
  const colorEnd = faker.random.arrayElement(
    colors.filter((color) => color !== colorStart && color !== colorMid)
  );

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

type sizeprops = {
  width: number | string;
  height: number | string;
  id: string;
  borderColor?: string;
  percent: number;
  sparkLine: number[];
  defaultLabels?: number[];
  defChart: number[][];
};
export interface IchartDataSet {
  data: number[];
  label: string;
  borderColor: string;
  borderWidth: number;
  tension: number;
}
export function CryptoTable({
  width,
  height,
  id,
  percent,
  sparkLine = [],
  defChart = [],
}: sizeprops) {
  const [day] = useState(20);
  const [datasets, setDataSets] = useState<IchartDataSet[]>([]);
  const today = new Date();
  const [labels, setLabels] = useState<Date[]>([]);
  useEffect(() => {
    if (id.length > 0 && percent && sparkLine.length > 0) {
      if (percent > 0) {
        setDataSets([
          {
            data: sparkLine.map((coin) => coin),
            label: `Price ( Past 7 Days ) in USD`,
            borderColor: "#379237",
            borderWidth: 2,
            tension: 0.1,
          },
        ]);
      } else if (percent <= 0) {
        setDataSets([
          {
            data: sparkLine.map((coin) => coin),
            label: `Price ( Past 7 Days ) in USD`,
            borderColor: "#FF6666",
            borderWidth: 2,
            tension: 0.1,
          },
        ]);
      }
      setLabels(
        Array.from({ length: sparkLine.length / 2 }, (_, i) => {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          return date;
        })
      );
    }
    if (sparkLine.length === 0 && defChart.length > 0) {
      if (percent > 0) {
        setDataSets([
          {
            data: defChart.slice(0, 50).map((coin) => coin[1]),
            label: `Price ( Past 7 Days ) in USD`,
            borderColor: "#379237",
            borderWidth: 1,
            tension: 0.1,
          },
        ]);
      } else if (percent <= 0) {
        setDataSets([
          {
            data: defChart.slice(0, 50).map((coin) => coin[1]),
            label: `Price ( Past 7 Days ) in USD`,
            borderColor: "#FF6666",
            borderWidth: 1,
            tension: 0.1,
          },
        ]);
      }
    }
  }, [id, percent, sparkLine, defChart]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 2, delay: 1, type: "tween" }}
      style={{ width: width, height: height }}
    >
      {datasets.length > 0 && sparkLine.length === 0 && defChart.length > 0 && (
        <Line
          data={{
            labels: defChart.slice(0, 50).map((coin: any) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return day === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [datasets[0]],
          }}
          options={{
            elements: {
              point: {
                borderWidth: 0,
                hitRadius: 0,
                rotation: 12,
                backgroundColor: "rgba(0 0 0/.0)",
                radius: 0,
                borderColor: "rgba(0 0 0/.0)",
                hoverBackgroundColor: "rgba(0 0 0/.0)",
                hoverBorderColor: "rgba(0 0 0/.0)",
                hoverBorderWidth: 0,
                hoverRadius: 0,
                pointStyle: "triangle",
                drawActiveElementsOnTop: false,
              },
              line:{
                borderWidth:2
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                  color: "rgba(0 0 0/.0)",
                  backdropColor: "rgba(0 0 0/0)",
                },
                beginAtZero: false,
                border: {
                  width: 0,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
                border: {
                  width: 0,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            responsive: true,
          }}
        />
      )}
      {sparkLine.length > 0 && labels.length > 0 && defChart.length === 0 && (
        <Line
          data={{
            labels: labels,

            datasets: [datasets[0]],
          }}
          options={{
            elements: {
              point: {
                radius: 0,
                hoverRadius: 0,
                hitRadius: 0,
              },
              line: {
                borderWidth: 5,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                  color: "rgba(0 0 0/.0)",
                  backdropColor: "rgba(0 0 0/0)",
                },
                border: {
                  width: 0,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
                border: {
                  width: 0,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            animation: false,
            responsive: true,
          }}
        />
      )}
    </motion.div>
  );
}
