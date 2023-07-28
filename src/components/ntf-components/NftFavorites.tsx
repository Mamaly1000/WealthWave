import React from "react";
import { motion } from "framer-motion";
import { AvatarPics } from "../../Data/profilePics";

const NftFavorites = ({
  index,
  displayButton = true,
  nftlist = false,
}: {
  index: number;
  displayButton: boolean;
  nftlist: boolean;
}) => {
  return (
    <motion.div
      animate={{ y: displayButton ? -100 : 0 }}
      className="nft-post-favorites"
    >
      {!nftlist &&
        AvatarPics.slice(index, index + 4).map((pic, i) => {
          return i !== 3 ? (
            <motion.span
              key={i}
              style={{
                backgroundImage: `url(${pic})`,
                zIndex: i + 1,
                right: i !== 0 ? `${i * 10}px` : "",
              }}
            ></motion.span>
          ) : (
            <motion.span
              style={{
                right: `${i * 10}px`,
                zIndex: i,
                background: "rgba(0 0 0/.5)",
              }}
              key={i}
            >
              {index * 13 + 21}+
            </motion.span>
          );
        })}
      {nftlist &&
        AvatarPics.slice(0, 4).map((pic, i) => {
          return i !== 3 ? (
            <motion.span
              key={i}
              style={{
                backgroundImage: `url(${pic})`,
                zIndex: i + 1,
                right: i !== 0 ? `${i * 10}px` : "",
              }}
            ></motion.span>
          ) : (
            <motion.span
              style={{
                right: `${i * 10}px`,
                zIndex: i,
                background: "rgba(0 0 0/.5)",
              }}
              key={i}
            >
              {index * 13 + 21}+
            </motion.span>
          );
        })}
    </motion.div>
  );
};

export default NftFavorites;
