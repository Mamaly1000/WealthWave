import React, { useEffect, useRef, useState } from "react";
import { default_charts_data } from "../../Data/dummy";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-zoom";
import zoomPlugin from "chartjs-plugin-zoom";
import { Chart } from "chart.js";
import { useContextFunction } from "../../context/AppContext";
import useCrypto from "../../hooks/useCrypto";

Chart.register(zoomPlugin);
const Crypto_Chart_Data = () => {
  const chartRef = useRef(null);
  const contextData = useContextFunction();
  const { cryptoSelector } = useCrypto();
  const chart = default_charts_data[1].prices;
  const [day] = useState(20);
  const [datasets, setDatasets] = useState([
    {
      data: chart.map((coin) => coin[1]),
      label: `Price ( Past 7 Days ) in USD`,
      borderColor: "#FF6666",
      borderWidth: 1.1,
      tension: 0.1,
    },
  ]);
  const [label, setLabel] = useState<string[]>([]);
  useEffect(() => {
    if (
      cryptoSelector.cryptoCharts.length > 0 &&
      cryptoSelector.cryptoChartDisplayType === "prices"
    ) {
      setLabel(
        cryptoSelector.cryptoCharts[0].data.prices.map((coin) => {
          let date = new Date(coin[0]);
          let time =
            date.getHours() > 12
              ? `${date.getHours() - 12}:${date.getMinutes()} PM`
              : `${date.getHours()}:${date.getMinutes()} AM`;
          return day === 1 ? time : date.toLocaleDateString();
        })
      );
      const datas = [];
      for (const chart of cryptoSelector.cryptoCharts) {
        datas.push({
          data: chart.data.prices.map((coin) => coin[1]),
          label: `Price ( Past 7 Days ) in USD`,
          borderColor: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
          )},${Math.floor(Math.random() * 255)}, ${Math.floor(1)})`,
          borderWidth: 0.5,
          tension: 0.01,
        });
      }
      setDatasets(datas);
    }
  }, [cryptoSelector]);
  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };
  return (
    <div>
      <button onClick={handleResetZoom}>reset zoom</button>
      {cryptoSelector.cryptoCharts.length > 0 && (
        <Line
          ref={chartRef}
          data={{
            labels: label.map((coin: any) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return day === 1 ? time : date.toLocaleDateString();
            }),
            datasets: datasets,
          }}
          options={{
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: "x",
                },
                zoom: {
                  mode: "x",
                  drag: {
                    enabled: true,
                    backgroundColor: "rgba(255 255 255 /.1)",
                  },
                  wheel: {
                    enabled: true,
                    speed: contextData!.screenW ? 0.005 : 0.1,
                  },
                },
              },
              subtitle: {
                display: true,
                text: "Custom Chart Subtitle",
              },
            },
            transitions: {
              zoomPlugin: {
                animation: {
                  duration: 1000,
                  easing: "easeOutCubic",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Crypto_Chart_Data;
