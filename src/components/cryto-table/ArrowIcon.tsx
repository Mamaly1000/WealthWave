import React from "react";
import arrowDownIcon from "../../assets/crypto/arrow-down.svg";
import { motion } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
const ArrowIcon = ({ type, typeMode }: { type: string; typeMode: string }) => {
  const {
    cryptoSelector: { filterType },
  } = useCrypto();
  return (
    <motion.img
      src={arrowDownIcon}
      className="th-arrow"
      initial={{ rotateZ: 0 }}
      animate={
        type === filterType.type_name
          ? {
              rotateZ: typeMode === "ASC" ? 180 : 0,
            }
          : { rotateZ: 0 }
      }
      transition={{ ease: "linear", duration: 0.13, type: "tween" }}
    />
  );
};

export default ArrowIcon;
