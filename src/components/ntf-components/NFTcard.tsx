import { useEffect, useState } from "react";
import { INFT } from "../../features/nft_slice/nft_slice";
import { nftPics } from "../../Data/nftPic";
import ethIMG from "./../../assets/nft/icons8-ethereum-logo.svg";
import DefImg from "./../../assets/nft/icons8-avalanche-64.png";
import NftFavorites from "./NftFavorites";
import saveIcon from "./../../assets/crypto/save.svg";
import { motion } from "framer-motion";
import { viewFromDown } from "../../motions/viewCryptoMotions";
import { useNavigate } from "react-router-dom";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useSelector } from "react-redux";
const NFTcard = ({ nft, index }: { nft: INFT; index: number }) => {
  const nav = useNavigate();
  const themeSelector = useSelector(selecttheme);
  const [priceIMG, setPirceIMG] = useState<string>("");
  const [nftPrice] = useState<number>(
    Math.floor((Math.random() * 123423400) / 1000000) / 100
  );
  useEffect(() => {
    if (nft.asset_platform_id === "ethereum") {
      setPirceIMG(ethIMG);
    } else {
      setPirceIMG(DefImg);
    }
  }, [nft.asset_platform_id]);
  return (
    <motion.div
      variants={viewFromDown(index, 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="nft-card"
      onClick={() => nav(`/nfts/${nft.id}`)}
      style={{ color: themeSelector.headerColor }}
      whileHover={{ background: themeSelector.containerColor }}
    >
      <div className="image-container">
        <img src={nftPics[Math.floor(Math.random() * nftPics.length)]} />
      </div>
      <div className="nft-card-data">
        <span
          className="nft-name"
          style={{
            fontSize:
              nft.name.length > 10
                ? ".8rem"
                : nft.name.length > 15
                ? ".6rem"
                : "1rem",
          }}
        >
          {nft.name}
        </span>
        <span className="nft-price">
          {nftPrice} <img src={priceIMG} />
        </span>
        <NftFavorites index={index} displayButton={false} nftlist={true} />
        <motion.button
          animate={{
            background: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
          whileHover={{ background: themeSelector.hoverColor }}
          transition={{ duration: 0.1 }}
          className="save-nft-btn"
        >
          <img src={saveIcon} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NFTcard;
