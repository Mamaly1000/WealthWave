import { motion } from "framer-motion";
import { cryptoControlsType } from "./Crypto_Search";
import { BsChevronDown } from "react-icons/bs";
const ArrowComponent = ({
  maintype,
  currentType,
}: {
  maintype: cryptoControlsType;
  currentType: cryptoControlsType | "";
}) => {
  return (
    <motion.span
      transition={{ duration: 0.1, type: "tween" }}
      animate={{ rotate: maintype === currentType ? 180 : 0 }}
    >
      <BsChevronDown />
    </motion.span>
  );
};

export default ArrowComponent;
