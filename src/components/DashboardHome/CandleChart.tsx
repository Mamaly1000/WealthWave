import moment from "moment";
import ReactApexChart from "react-apexcharts";
import React from "react";
import { candleseries } from "../../Data/dummy";
import { ThemeInterface } from "../../hooks/useTheme";

const CandleChart = ({ themeSelector }: { themeSelector: ThemeInterface }) => {
  return (
    <div
      style={{ background: themeSelector.containerColor }}
      className="candle-stcik-chart-container"
    >
      <ReactApexChart
        options={{
          chart: {
            type: "candlestick",
            animations: {
              enabled: false,
            },
          },
          title: {
            text: "Apple stock",
            align: "left",
            style: {
              fontSize: "1.2rem",
              color: "#ffffff",
            },
            offsetY: 20,
          },
          tooltip: {
            enabled: true,
            theme: "dark",
          },
          xaxis: {
            type: "datetime",
            labels: {
              formatter: function (val) {
                return moment(val).format("YYYY/MM/DD");
              },
              style: {
                colors: "#ffffff",
                fontSize: ".5rem",
              },
            },
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
            labels: {
              style: {
                colors: "#ffffff",
                fontSize: ".5rem",
              },
            },
          },
          grid: {
            borderColor: "rgba(255 255 255/.2)",
          },
        }}
        series={candleseries}
        type="candlestick"
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default React.memo(CandleChart);
