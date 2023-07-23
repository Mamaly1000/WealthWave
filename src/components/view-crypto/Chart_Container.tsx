import { useMemo, useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import Chart from "react-apexcharts";
import moment from "moment";
import { useContextFunction } from "../../context/AppContext";
import { motion } from "framer-motion";
const Chart_Container = () => {
  const { cryptoSelector } = useCrypto();
  const contextData = useContextFunction();
  const [datasets, setDatasets] = useState([]);
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
          return cryptoSelector.cryptoDay === 1
            ? time
            : moment(date).format("YYYY/MM/DD");
        })
      );
      const datas = [];
      for (const chart of cryptoSelector.cryptoCharts) {
        datas.push({
          data: chart.data.prices.map((coin) => coin[1]),
          name: `${chart.id} Price chart for ( Past ${cryptoSelector.cryptoDay} Days ) in USD `,
        });
      }
      setDatasets(datas as never[]);
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
          return cryptoSelector.cryptoDay === 1
            ? time
            : moment(date).format("YYYY/MM/DD");
        })
      );
      const datas = [];
      for (const chart of cryptoSelector.cryptoCharts) {
        datas.push({
          data: chart.data.market_caps.map((coin) => coin[1]),
          name: `${chart.id} market-cap chart for ( Past ${cryptoSelector.cryptoDay} Days ) in USD `,
        });
      }
      setDatasets(datas as never[]);
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
          return cryptoSelector.cryptoDay === 1
            ? time
            : moment(date).format("YYYY/MM/DD");
        })
      );
      const datas = [];
      for (const chart of cryptoSelector.cryptoCharts) {
        datas.push({
          data: chart.data.total_volumes.map((coin) => coin[1]),
          name: `${chart.id} total-volumes chart for ( Past ${cryptoSelector.cryptoDay} Days ) in USD `,
        });
      }
      setDatasets(datas as never[]);
    }
  }, [cryptoSelector.cryptoChartDisplayType, cryptoSelector.cryptoCharts]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4, type: "tween" }}
      className="chart-container"
    >
      {cryptoSelector.cryptoCharts.length > 0 && label.length > 0 && (
        <Chart
          options={{
            chart: {
              id: "basic-bar",
              zoom: { type: "x" },
            },
            xaxis: {
              categories: label,
              labels: {
                style: {
                  colors: "rgba(255 255 255/.4)",
                  fontSize: "10px",
                },
              },
            },
            yaxis: {
              labels: {
                style: {
                  colors: "rgba(255 255 255 /.4)",
                  fontSize: "10px",
                },
                align: "left",
                maxWidth: 30,
              },
            },
            tooltip: {
              style: {
                fontSize: "10px",
              },
              theme: "dark",
              followCursor: true,
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
                  offsetX: 0.1,
                  show: true,
                  offsetY: 0.1,
                },
              },
              borderColor: "rgba(255 255 255 /.1)",
              strokeDashArray: 1,
            },
            legend: {
              position: "bottom",
              fontWeight: 500,
              horizontalAlign: "left",
              height: 100,
              labels: {
                colors: ["white"],
              },
            },
            colors: ["#00B4D8", "#FF1818", "#1C7947"],
          }}
          series={datasets}
          type="area"
          height={contextData!.screenW ? 450 : 400}
        />
      )}
    </motion.div>
  );
};

export default Chart_Container;
