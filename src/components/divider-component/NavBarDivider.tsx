import { motion } from "framer-motion";
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
      className="nft-divider"
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
