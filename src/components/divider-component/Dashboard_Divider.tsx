import { motion } from "framer-motion";

const Dashboard_Divider = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
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

export default Dashboard_Divider;
