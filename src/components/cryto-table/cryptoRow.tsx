import { useState } from "react";
import useCrypto, { IcryptoData } from "../../hooks/useCrypto";
import { motion, AnimatePresence } from "framer-motion";
type tableRowType = {
  coin: IcryptoData;
  index: number;
};
const CryptoRow = ({ coin, index }: tableRowType) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { popCrypto } = useCrypto();
  const tableRowsAnimation = {
    hidden: {
      opacity: 0,
      x: 100,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.13,
        delay: index / 10 + 0.1,
        when: "beforeChidlren",
      },
    },
    hover: {
      background: "	hsla(0, 0%, 100%, 0.1)",
      boxShadow: "0 5px 10px hsla(0, 0%, 100%, 0.1)",
      y: -1,
      transition: {
        duration: 0.1,
        yoyo: Infinity,
      },
    },
  };
  const childrenNimation = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween",
        delay: index / 10 + 0.2,
        mass: 0.4,
        damping: 8,
      },
    },
  };
  const textAnimation = {
    hidden: {
      opacity: 0,
      paddingInline: "100px 0",
    },
    visible: {
      opacity: 1,
      paddingInline: "0",
      transtion: {
        duration: 2,
        delay: index / 10 + 2,
        type: "tween",
      },
    },
  };
  return (
    <motion.tr
      exit={{ x: 1000, opacity: 0 }}
      variants={tableRowsAnimation}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      onClick={() => setClicked(true)}
    >
      <td className="td-rate">{coin!.market_cap_rank}</td>
      <td className="td-icon">
        <motion.img
          variants={childrenNimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="coin-icon"
          src={coin!.image}
          alt="coin-icon"
        />
      </td>
      <motion.td
        variants={textAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="td-name"
      >
        {coin!.name}
      </motion.td>
      <td className="td-price">{coin!.current_price}$</td>
      <td className="td-high">{coin!.high_24h}</td>
      <td className="td-low">{coin!.low_24h}</td>
      <td
        className={`td-percent ${
          coin.market_cap_change_percentage_24h > 0
            ? "increased-rate"
            : "decreased-rate"
        }`}
      >
        {coin!.market_cap_change_percentage_24h}%
      </td>
      <td className="td-cap">{coin!.market_cap}$</td>
    </motion.tr>
  );
};

export default CryptoRow;
