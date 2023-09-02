import ReactApexChart from "react-apexcharts";

const SparkLineChart = ({ color }: { color: string }) => {
  return (
    <ReactApexChart
      options={{
        chart: {
          type: "area",
          stacked: false,
          animations: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 1,
          colors: "rgba(255 255 255/.3)",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: { show: false },
        },
        xaxis: {
          type: "numeric",
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        tooltip: {
          shared: false,
          theme: "dark",
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        stroke: {
          colors: ["rgba(255 255 255/.3)"],
        },
      }}
      series={[
        {
          name: "data",
          data: [
            1343, 223, 333, 3334, 2235, 6433, 7234, 8332, 2339, 3210, 2311,
            4412,
          ],
          color: color,
        },
      ]}
      type="area"
      height={100}
      width={150}
    />
  );
};

export default SparkLineChart;
