import { motion } from "framer-motion";
import { wordSeprator } from "../HomePageIntro";
import { useNavigate } from "react-router-dom";
type singleSlidesType = {
  data: {
    title: string;
    pathName: string;
    bg_color: string;
    bg_pic: string;
    btn_text: string;
    btn_pic: string;
  };
  index: number;
  active: boolean;
};
const SingleSlide = ({ data, active }: singleSlidesType) => {
  const nav = useNavigate();
  return (
    <motion.div>
      <motion.img
        animate={{ scale: active ? 1 : 0 }}
        transition={{ delay: 0.2, type: "tween" }}
        src={data.bg_pic}
      />
      <motion.h3>{wordSeprator(data.title)}</motion.h3>
      <motion.button
        className="slider-btn"
        style={{ boxShadow: `0 0 10px ${data.bg_color.padStart(1, "#")[0]}` }}
        onClick={() => nav(data.pathName)}
      >
        {data.btn_text}
        <img src={data.btn_pic} />
      </motion.button>
    </motion.div>
  );
};

export default SingleSlide;
