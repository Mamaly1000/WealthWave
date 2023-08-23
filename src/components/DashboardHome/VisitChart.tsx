import ReactApexChart from "react-apexcharts";
import Divider from "../ntf-components/Divider";

const VisitChart = () => {
  const series = [
    {
      name: "Registered Users",
      data: [40, 31, 40, 101, 40, 36, 32, 23, 14, 80, 50, 45],
    },
    {
      name: "Unregistered Users",
      data: [23, 3, 4, 10, 4, 3, 3, 2, 1, 8, 5, 2],
    },
  ];
  return (
    <div className="total-visited-container">
      <h2 className="header">total visits</h2>
      <Divider height={3} width={150} />
      <ReactApexChart
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: "top", // top, center, bottom
              },
            },
          },
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#ffffff"],
            },
          },
          xaxis: {
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
            position: "top",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: false,
            },
            labels: {
              style: {
                colors: "#ffffff",
              },
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          title: {
            text: "Total Visits",
            floating: true,
            offsetY: 330,
            align: "center",
            style: {
              color: "#ffffff",
            },
          },
          tooltip: {
            theme: "dark",
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          legend: {
            show: false,
          },
        }}
        series={series}
        type="bar"
        height={300}
        width={"100%"}
      />
    </div>
  );
};

export default VisitChart;
