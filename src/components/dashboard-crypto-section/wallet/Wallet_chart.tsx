import moment from "moment";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";

const Wallet_chart = ({ sparkLine }: { sparkLine: number[] | undefined }) => {
  const theme = useSelector(selecttheme);
  const generateRandomDate = () => {
    const now = moment();
    const weekAgo = moment().subtract(7, "days");
    const diff = now.diff(weekAgo, "days");
    const randomDay = Math.floor(Math.random() * diff);
    const randomDate = moment(weekAgo).add(randomDay, "days");
    return randomDate.toISOString();
  };

  return (
    <div>
      {sparkLine && (
        <ReactApexChart
          options={{
            chart: {
              id: "area-datetime",
              type: "area",
              height: 350,
              zoom: {
                autoScaleYaxis: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 0,
            },
            xaxis: {
              type: "datetime",
              tickAmount: 6,
              labels: {
                formatter: (val, times, opt) => {
                  console.log(val);
                  return moment(val).format("yyyy/mm/dd");
                },
              },
            },
            tooltip: {
              x: {
                format: "dd MMM yyyy",
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100],
              },
            },
            labels: [...sparkLine].reverse().map((_p, index) => {
              return moment(Date.now() - index * 100).format(
                "YYYY/MM/DD HH:MM"
              );
            }),
          }}
          series={[
            {
              data: sparkLine || [],
              color: theme.btnColor,
              name: "7days sparkline",
            },
          ]}
          type="area"
          height={350}
          width={1000}
        />
      )}
    </div>
  );
};

export default Wallet_chart;
