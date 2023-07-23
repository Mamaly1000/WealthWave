import CoinComparison from "./CoinComparison";
import ChartSetting from "./ChartSetting";
import Chart_Container from "./Chart_Container";
import PercentageTable from "./PercentageTable";
import { motion } from "framer-motion"; 
import { useState } from "react";
const CoinChart = () => {
  const [displayChild, setDisplayChild] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4, type: "tween" }}
      exit={{
        opacity: 0,
        x: -50,
        transition: {
          duration: 0.3,
        },
      }}
      className="chart-section"
      onAnimationComplete={() => setDisplayChild(true)}
    >
      <ChartSetting />
      <div className="main-chart-container">
        {displayChild && <Chart_Container />}
      </div>
      <CoinComparison />
      <PercentageTable />
    </motion.div>
  );
};

export default CoinChart;
