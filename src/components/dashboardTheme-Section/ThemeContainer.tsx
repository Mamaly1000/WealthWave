import React from "react";
import { motion } from "framer-motion";
import { viewFromLeft } from "../../motions/viewCryptoMotions";
import ThemeHeader from "./ThemeHeaders";

const ThemeContainer = ({
  children,
  title,
  height,
  width,
}: {
  title: string;
  children: React.ReactNode;
  height: number;
  width: number;
}) => {
  return (
    <motion.div
      variants={viewFromLeft(1, 1)}
      initial="hidden"
      animate="visible"
      className="themes-container"
    >
      <ThemeHeader height={height} width={width} text={title} />
      <div className="data-container">{children}</div>
    </motion.div>
  );
};

export default ThemeContainer;
