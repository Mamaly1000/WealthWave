import { motion } from "framer-motion";
import NFTcard from "./NFTcard";
import { viewFromDown } from "../../motions/viewCryptoMotions";
import { INFT } from "../../features/nft_slice/nft_slice";

const NftListComponent = ({ data }: { data: INFT[] }) => {
  return (
    <motion.section
      variants={viewFromDown(1, 0.4)}
      initial="hidden"
      whileInView="visible"
      className="nft-list-container"
    >
      {data.map((nft, index) => {
        return <NFTcard index={index} nft={nft} key={index} />;
      })}
    </motion.section>
  );
};

export default NftListComponent;
