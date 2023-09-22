import { IcryptoData } from "../../hooks/useCrypto";
import SingleStackComponent from "./SingleStackComponent";
import { motion } from "framer-motion";

const CryptoStackTable = ({ cryptoData }: { cryptoData: IcryptoData[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      className="crypto-stack-table"
    >
      {cryptoData.map((coin, index) => {
        return <SingleStackComponent coin={coin} index={index} key={coin.id} />;
      })}
    </motion.div>
  );
};

export default CryptoStackTable;
