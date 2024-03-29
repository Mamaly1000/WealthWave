import { useEffect, useState } from "react";
import { INFT } from "../../features/nft_slice/nft_slice";
import { motion } from "framer-motion";
import tickIcon from "./../../assets/nft/icons8-instagram-verification-badge.svg";
import { Avatars } from "../../Data/avatars";
import ethIMG from "./../../assets/nft/icons8-ethereum-logo.svg";
import DefImg from "./../../assets/nft/icons8-avalanche-64.png";
import { useNavigate } from "react-router-dom";
import vipIcon from "./../../assets/nft/icons8-vip-48.png";
import PremiumIcon from "./../../assets/nft/icons8-premium-64.png";
import { nftCardsMotion } from "../../motions/motions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const iconValue = [tickIcon, vipIcon, PremiumIcon];

const BestSellerNFTPost = ({ index, nft }: { index: number; nft: INFT }) => {
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
      variants={nftCardsMotion(index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="best-seller-nft-post"
      onClick={() => nav(`/nfts/${nft.id}`)}
      style={{ color: themeSelector.plainTextColor }}
      whileHover={{ background: themeSelector.containerColor }}
    >
      <div
        className="nft-post-image-container"
        style={{ backgroundImage: `url(${Avatars[index]})` }}
      >
        <img
          className="badge"
          src={iconValue[Math.floor(Math.random() * iconValue.length)]}
        />
      </div>
      <div className="nft-post-data">
        <span className="name">{nft.name}</span>
        <span className="price">
          {nftPrice}
          <img src={priceIMG} />
        </span>
      </div>
    </motion.div>
  );
};

export default BestSellerNFTPost;
