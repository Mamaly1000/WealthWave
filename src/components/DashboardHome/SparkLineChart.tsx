import ReactApexChart from "react-apexcharts";

const SparkLineChart = ({ chart }: { chart: (string | number)[][] }) => {
  return (
    <ReactApexChart
      options={{
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
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
          title: {
            text: "Price",
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
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
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },
          },
        },
      }}
      series={[
        {
          name: "Registered Users",
          data: [40, 31, 40, 101, 40, 36, 32, 23, 14, 80, 50, 45],
        },
        {
          name: "Unregistered Users",
          data: [23, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2],
        },
      ]}
      type="area"
      height={350}
    />
  );
};

export default SparkLineChart;
