import React, { useEffect } from "react";
import useCrypto from "../hooks/useCrypto";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";

const View_Crypto = () => {
  const { getChartData } = useCrypto();
  const { id } = useParams();
  useEffect(() => {}, []);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ paddingTop: 200 }}
    >
      {id}

      <button onClick={() => getChartData(id as string)}>get chart data</button>
    </motion.div>
  );
};

export default View_Crypto;
