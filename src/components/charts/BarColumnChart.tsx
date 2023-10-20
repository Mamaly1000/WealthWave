import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import styled from "styled-components";

const Div = styled.div``;

const BarColumnChart = ({
  series,
}: {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined;
}) => {
  const theme = useSelector(selecttheme);

  return (
    <Div className="chart">
      <ReactApexChart
        options={{
          chart: {
            type: "rangeBar",
            zoom: {
              enabled: false,
            },
            background: "transparent",
            dropShadow: {
              blur: 10,
              color: theme.btnColor,
              enabled: true,
              opacity: 0.5,
            },
            foreColor: theme.btnColor,
            animations: {
              enabled: true,
              easing: "linear",
              speed: 10000,
            },
            redrawOnWindowResize: true,
          },
          plotOptions: {
            bar: {
              isDumbbell: true,
              columnWidth: 2,
              dumbbellColors: [[theme.btnColor, theme.btnColor]],
            },
          },
          legend: {
            show: true,
            showForSingleSeries: true,
            position: "top",
            horizontalAlign: "center",
            fontWeight: 700,
            showForNullSeries: true,
            onItemClick: {
              toggleDataSeries: false,
            },
          },
          fill: {
            type: "gradient",
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
            borderColor: theme.btnColor,
          },
          xaxis: {
            axisBorder: {
              color: theme.btnColor,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            axisBorder: {
              color: theme.btnColor,
            },
          },
          tooltip: {
            followCursor: true,
            shared: true,
            theme: "dark",
            x: {
              formatter: (val) => {
                return val + "";
              },
            },
          },
        }}
        series={series}
        type="rangeBar"
        height={"100%"}
      />
    </Div>
  );
};

export default BarColumnChart;
