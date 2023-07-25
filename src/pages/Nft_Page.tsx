import React from "react";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";

const Nft_Page = () => {
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="nfts-page"
    >
      Nft_Page
    </motion.div>
  );
};

export default Nft_Page;
