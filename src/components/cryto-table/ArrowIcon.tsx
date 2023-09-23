import { motion } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const ArrowIcon = ({ type }: { type: string }) => {
  const {
    cryptoSelector: { sortType },
  } = useCrypto();
  const theme = useSelector(selecttheme);
  return (
    <motion.span
      className="arrow"
      transition={{ duration: 0.1, type: "tween" }}
      animate={{
        rotateZ:
          sortType.type_name === type && sortType.mode !== "DESC" ? 180 : 0,
      }}
      style={{ color: theme.headerColor, borderColor: theme.btnColor }}
    >
      <BsChevronDown />
    </motion.span>
  );
};

export default ArrowIcon;
