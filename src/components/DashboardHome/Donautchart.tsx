import Divider from "../ntf-components/Divider";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { ThemeInterface } from "../../hooks/useTheme";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const Donautchart = ({ themeSelector }: { themeSelector: ThemeInterface }) => {
  const data = {
    labels: [
      "sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "profit percentage",
        data: [12, 19, 30, 50, 25, 53, 20],
        backgroundColor: [
          "rgba(255, 12, 132, .9)",
          "rgba(54, 122, 235, .9)",
          "rgba(54, 206, 86, .9)",
          "rgba(75, 221, 192, .9)",
          "rgba(153, 102, 255, .9)",
          "rgba(121, 159, 64, .9)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{ background: themeSelector.containerColor }}
      className="donaut-chart-container"
    >
      <h2 className="header">
        recent week profits
        <Divider height={3} width={150} />
      </h2>
      <div className="data-container">
        <div id="chart">
          <PolarArea
            data={data}
            options={{
              backgroundColor: "rgba(255 255 255/.1)",
              plugins: {
                legend: {
                  display: false,
                },
              },
              transitions: {
                PolarArea: {
                  animation: {
                    duration: 0,
                  },
                  animations: {
                    PolarArea: {
                      duration: 0,
                    },
                  },
                },
              },
              borderColor: "rgba(255 255 255 /.2)",
              indexAxis: "x",
              datasets: {
                polarArea: {
                  label: "ds",
                  borderAlign: "center",
                  backgroundColor: "#fff",
                },
              },
            }}
            color="#fff"
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Donautchart;
