import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const Dashboard_Divider = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{
        scaleY: 1,
      }}
      transition={{
        duration: 0.2,
        type: "tween",
      }}
      exit={{
        opacity: 0,
      }}
      className={`${themeSelector.divider}`}
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></motion.div>
  );
};

export default Dashboard_Divider;
