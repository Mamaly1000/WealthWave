import { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";

const CryptoTreeChart = ({
  data,
  height,
  width,
}: {
  data: IcryptoData[];
  height: number | string;
  width: number | string;
}) => {
  const { cryptoSelector } = useCrypto();
  const [chartData, setChartData] = useState<{ x: string; y: number }[]>([]);
  useMemo(() => {
    const newArray = [];
    for (const coin of data) {
      newArray.push({
        x: coin.id,
        y: coin.price_change_percentage_24h,
      });
    }
    setChartData(newArray);
  }, [data, cryptoSelector.cryptoSearch]);

  return (
    <motion.div
      style={{
        minWidth: width,
        maxWidth: width,
        minHeight: height,
        maxHeight: height,
      }}
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      exit="exit"
    >
      <ReactApexChart
        options={{
          legend: {
            show: false,
          },
          chart: {
            type: "treemap",
            width: width,
            toolbar: {
              tools: {
                download: true,
                selection: true,
              },
            },
          },
          title: {
            text: "Crypto Percentage Tree Map",
            style: {
              color: "rgba(255 255 255 /1)",
              fontSize: "1rem",
              fontWeight: "500",
            },
            align: "left",
            margin: 50,
            offsetY: 0,
          },
          dataLabels: {
            enabled: true,
            style: {
              fontSize: "20rem",
            },
            formatter: (_text, opt) => {
              return _text + " " + (opt.value as number).toFixed(2) + "%";
            },

            background: { borderWidth: 1 },
          },
          plotOptions: {
            treemap: {
              enableShades: false,
              colorScale: {
                ranges: [
                  {
                    from: -100,
                    to: 0,
                    color: "#FF1E00",
                  },
                  {
                    from: 0.00001,
                    to: 100,
                    color: "#1A5D1A",
                    foreColor: "#1A5D1A",
                  },
                ],
              },
            },
          },
          tooltip: {
            theme: "dark",
            y: {
              formatter(val, _opts) {
                return val + "%";
              },
            },
          },
          markers: {
            onClick: (val) => {
              console.log(val);
            },
          },
        }}
        series={[
          {
            name: "cryptos pice",
            data: chartData,
          },
        ]}
        type="treemap"
        height={height}
      />
    </motion.div>
  );
};

export default CryptoTreeChart;
