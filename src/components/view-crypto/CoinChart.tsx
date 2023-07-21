import React, { useEffect, useMemo, useState } from "react";
import Chart from "react-apexcharts";
import { btc_chart_data } from "../../Data/charts";
import { useContextFunction } from "../../context/AppContext";
import useCrypto from "../../hooks/useCrypto";
import { default_charts_data } from "../../Data/dummy";
import { useDispatch } from "react-redux";
import { setChartType } from "../../features/crypto_slice/crypto_slice";
const CoinChart = ({
  day,
  setDay,
}: {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const contextData = useContextFunction();
  const { cryptoSelector } = useCrypto();
  const dispatch = useDispatch();
  const chart = default_charts_data[1].total_volumes;
  const [datasets, setDatasets] = useState([
    {
      data: chart.map((coin) => coin[1]),
      name: `Price ( Past ${day} Days ) in USD `,
    },
  ]);
  const [label, setLabel] = useState<string[]>([]);
  const fetchcharts = useMemo(() => {
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
          name: `Price ( Past ${day} Days ) in USD `,
        });
      }
      setDatasets(datas);
    }
    if (
      cryptoSelector.cryptoCharts.length > 0 &&
      cryptoSelector.cryptoChartDisplayType === "market-cap"
    ) {
      setLabel(
        cryptoSelector.cryptoCharts[0].data.market_caps.map((coin) => {
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
          data: chart.data.market_caps.map((coin) => coin[1]),
          name: `Price ( Past ${day} Days ) in USD `,
        });
      }
      setDatasets(datas);
    }
    if (
      cryptoSelector.cryptoCharts.length > 0 &&
      cryptoSelector.cryptoChartDisplayType === "total-volumes"
    ) {
      setLabel(
        cryptoSelector.cryptoCharts[0].data.total_volumes.map((coin) => {
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
          data: chart.data.total_volumes.map((coin) => coin[1]),
          name: `Price ( Past ${day} Days ) in USD `,
        });
      }
      setDatasets(datas);
    }
  }, [cryptoSelector.cryptoChartDisplayType, cryptoSelector.cryptoCharts]);
  const days = [1, 7, 14, 30, 60, 90, 180];
  return (
    <div className="chart-section">
      <div className="chart-settings">
        <div className="chart-data-titles">
          {["prices", "market-cap", "total-volumes"].map((value, index) => {
            return (
              <span
                key={index}
                className={`${
                  cryptoSelector.cryptoChartDisplayType === value
                    ? "selected-title"
                    : ""
                }`}
                onClick={() => dispatch(setChartType(value))}
              >
                {value}
              </span>
            );
          })}
        </div>
        <div className="chart-days">
          {days.map((d, index) => {
            return (
              <span
                className={`${day === d ? "selected-day" : ""}`}
                onClick={() => setDay(d)}
                key={index}
              >
                {d === 1 ? d + " day" : d + " days"}
              </span>
            );
          })}
        </div>
      </div>
      <div className="chart-container">
        {cryptoSelector.cryptoCharts.length > 0 && label.length > 0 && (
          <Chart
            options={{
              chart: {
                id: "basic-bar",
                zoom: { type: "x" },
              },
              xaxis: {
                categories: label.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return day === 1 ? time : date.toLocaleDateString();
                }),
                labels: {
                  style: {
                    colors: "rgba(255 255 255/.4)",
                    fontSize: "10px",
                    fontFamily: "rail",
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "rgba(255 255 255 /.4)",
                    fontSize: "10px",
                    fontFamily: "rail",
                  },
                },
              },
              tooltip: {
                style: {
                  fontSize: "10px",
                },
                theme: "dark",
              },
              dataLabels: {
                enabled: false,
              },
              markers: {
                colors: "#0079ff",
              },
              stroke: { width: 1 },
              grid: {
                position: "back",
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
                yaxis: {
                  lines: {
                    show: true,
                  },
                },
              },
              legend: {
                position: "top",
              },
              responsive: [{ breakpoint: undefined, options: {} }],
              colors: ["red", "blue", "green"],
            }}
            series={datasets}
            type="area"
            height={500}
          />
        )}
      </div>
    </div>
  );
};

export default CoinChart;
