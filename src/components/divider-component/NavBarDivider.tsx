import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const NavBarDivider = ({
  width,
  height,
  path,
  hover,
}: {
  width: number;
  height: number;
  path: string;
  hover: string;
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: window.location.pathname === path || hover === path ? 1 : 0,
      }}
      whileHover={{ scaleX: 1 }}
      transition={{
        duration: 0.13,
        type: "tween",
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

export default NavBarDivider;
