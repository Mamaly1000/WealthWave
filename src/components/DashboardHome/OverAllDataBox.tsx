import { useSelector } from "react-redux";
import SparkLineChart from "./SparkLineChart";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const OverAllDataBox = ({
  data,
}: {
  data: {
    icon: string;
    title: string;
    value: string;
    percentage: string;
    main_color: string;
    chartData: (string | number)[][];
  };
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="sm-box" style={{ background: data.main_color }}>
      <div className="left-section">
        <div className="data-title">
          <img src={data.icon} />
          {data.title}
        </div>
        <span className="bold">{data.value}</span>
        <motion.button
          initial={{ background: "#000000" }}
          whileHover={{ background: themeSelector.btnColor }}
          transition={{ duration: 0.1 }}
          className="overall-btn"
        >
          view all
        </motion.button>
      </div>
      <div className="right-section">
        <SparkLineChart color={data.main_color} />
        <div className={`percentage ${+data.percentage > 0 ? "green" : "red"}`}>
          {data.percentage}%<span className="light">this year</span>
        </div>
      </div>
    </div>
  );
};

export default OverAllDataBox;
