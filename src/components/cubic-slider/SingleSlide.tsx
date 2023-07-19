import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { wordSeprator } from "../HomePageIntro";
import { useNavigate } from "react-router-dom";
type singleSlidesType = {
  data: { title: string; pathName: string };
  index: number;
  active: boolean;
};
const SingleSlide = ({ data, active }: singleSlidesType) => {
  const nav = useNavigate();
  return (
    <motion.div>
      <motion.h3
        transition={{ duration: 0.3, delay: 0.1, type: "tween" }}
        animate={{ y: !active ? -50 : 0, opacity: !active ? 0 : 1 }}
      >
        {wordSeprator(data.title)}
      </motion.h3>
      <motion.button
        transition={{ duration: 0.3, delay: 0.1, type: "tween" }}
        animate={{ y: active ? 0 : 30, opacity: active ? 1 : 0 }}
        onClick={() => nav(data.pathName)}
      >
        click now!
      </motion.button>
    </motion.div>
  );
};

export default SingleSlide;
