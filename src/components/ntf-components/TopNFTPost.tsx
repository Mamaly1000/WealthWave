import { nftPics } from "../../Data/nftPic";
import { AvatarPics } from "../../Data/profilePics";
import { INFT } from "../../features/nft_slice/nft_slice";
import { motion } from "framer-motion";
import { viewFromLeft } from "../../motions/viewCryptoMotions";
import { useEffect, useState } from "react";
import { nftCardsMotion } from "../../motions/motions";
import ethIMG from "./../../assets/nft/icons8-ethereum-logo.svg";
import DefImg from "./../../assets/nft/icons8-avalanche-64.png";
import rightIcon from "./../../assets/nft/rightArrow.svg";
import { useNavigate } from "react-router-dom";
import { useContextFunction } from "../../context/AppContext";
const TopNFTPost = ({ nft, index }: { nft: INFT; index: number }) => {
  const nav = useNavigate();
  const contextData = useContextFunction();
  const [liked, setLiking] = useState<boolean>(false);
  const [displayButton, setDisplayButton] = useState<boolean>(false);
  const [doubleClicked, setDoubledClick] = useState<boolean>(false);
  const [priceIMG, setPirceIMG] = useState<string>("");
  const [nftPrice] = useState<number>(
    Math.floor((Math.random() * 123423400) / 1000000) / 100
  );
  const displayLikeIcon = () => {
    setDoubledClick(true);
    setLiking((prev) => !prev);
    setTimeout(() => {
      setDoubledClick(false);
    }, 500);
  };
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
      onDoubleClick={() => displayLikeIcon()}
      className="top-nft-post"
      style={{ backgroundImage: `url(${nftPics[index]})` }}
      onClick={() => !contextData!.screenW && nav(`/nfts/${nft.id}`)}
      onMouseEnter={() => {
        if (contextData!.screenW) {
          setDisplayButton(true);
        }
      }}
      onMouseLeave={() => {
        setDisplayButton(false);
      }}
    >
      <motion.div
        animate={{ y: displayButton ? -100 : 0 }}
        className="nft-post-favorites"
      >
        {AvatarPics.slice(index, index + 4).map((pic, i) => {
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
      <motion.div
        animate={{ x: displayButton ? 100 : 0 }}
        className="nft-post-actions"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </button>
        <button onClick={() => setLiking((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "rgba(255 0 0 /.6)" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={liked ? "rgba(255 0 0 /.6)" : "currentColor"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </motion.div>
      <motion.div
        animate={{ y: displayButton ? 100 : 0 }}
        className="nft-post-data"
      >
        <span
          className="nft-post-name"
          style={{
            fontSize:
              nft.name.length > 10
                ? ".7rem"
                : nft.name.length > 15
                ? ".6rem"
                : "1rem",
          }}
        >
          {nft.name}
        </span>
        <span className="nft-post-price">
          {nftPrice} <img src={priceIMG} alt="price-image" />
        </span>
      </motion.div>
      <motion.button
        animate={{ x: displayButton ? 0 : -200 }}
        transition={{ type: "spring", duration: 0.2 }}
        className="nft-post-readmore-btn"
        onClick={() => nav(`/nfts/${nft.id}`)}
      >
        Let`s Go <img src={rightIcon} alt="right arrow icon" />
      </motion.button>
      {doubleClicked && (
        <div className={`likedable-icon`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "rgba(255 0 0 /1)" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={liked ? "red" : "rgba(255 255 255/.6)"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default TopNFTPost;
