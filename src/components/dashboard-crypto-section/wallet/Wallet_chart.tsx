import moment from "moment";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import { currencySymbol } from "../../../features/crypto_slice/crypto_slice";

const Wallet_chart = ({
  sparkLine,
  name,
  currency,
}: {
  name: string;
  currency: currencySymbol;
  sparkLine: number[] | undefined;
}) => {
  const theme = useSelector(selecttheme);

  return (
    <div className="coin-chart-preview">
      {sparkLine && (
        <ReactApexChart
          options={{
            chart: {
              id: "area-datetime",
              type: "area",
              zoom: {
                autoScaleYaxis: true,
              },
              background: "rgba( 0 0 0/0)",
              foreColor: theme.headerColor,
              fontFamily: "rail",
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 0,
            },
            xaxis: {
              type: "category",
              tickAmount: 6,
              labels: {
                formatter: (val) => {
                  return `${moment(+val).format("dddd YYYY/MMM/DD hh:mm")}`;
                },
                style: {
                  fontSize: "10px",
                  fontWeight: 100,
                },
                show: false,
              },
              axisBorder: {
                show: true,
                strokeWidth: 1,
              },
            },
            yaxis: {
              labels: {
                formatter(val) {
                  return `${+val.toFixed()}`;
                },
                show: false,
              },
              axisBorder: {
                show: true,
              },
            },
            tooltip: {
              theme: "dark",
              y: {
                formatter(val) {
                  return `${val.toLocaleString() + currency.symbol}`;
                },
              },
              style: {
                fontFamily: "rail",
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 0,
                opacityFrom: 0.5,
                opacityTo: 0.9,
                stops: [100, 100],
              },
            },
            labels: sparkLine
              .map((_i, index) => {
                return new Date(Date.now() - index * 1000000).getTime() + "";
              })
              .reverse(),
            theme: {
              mode: "dark",
            },
          }}
          series={[
            {
              data: sparkLine || [],
              color: theme.btnColor,
              name: `${name} sparkline in ${currency.name}`,
            },
          ]}
          type="area"
          height={"100%"}
          width={"100%"}
        />
      )}
    </div>
  );
};

export default Wallet_chart;
