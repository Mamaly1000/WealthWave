import React, { useState } from "react";
import { motion } from "framer-motion";
import { colors } from "../../Data/colors";
import { ArtistType } from "../../Data/Artists";
import starIcon from "./../../assets/crypto/star.svg";
import badge from "./../../assets/nft/badge.svg";
import { tagsMotion } from "../../motions/viewCryptoMotions";
const ArtistComponent = ({
  artist,
  index,
}: {
  artist: ArtistType;
  index: number;
}) => {
  const [followed, setFollow] = useState<boolean>(false);
  return (
    <motion.div
      className="nft-artist-card"
      style={{ background: colors[index] }}
    >
      <div
        className="bg-image-container"
        style={{ backgroundImage: `url(${artist.bgImage})` }}
      ></div>
      <div
        className="nft-artist-image-container"
        style={{ background: colors[index] }}
      >
        <img src={artist.profilePic} />
      </div>
      <div className="nft-artist-data">
        <span
          className="nft-artist-name"
          style={{ fontSize: artist.name.length > 10 ? ".8rem" : "1rem" }}
        >
          {artist.name}
        </span>
        <span className="nft-artist-rate">
          rate :<span className="rate">{artist.rate}</span>
          <img src={starIcon} alt="starIcon" />
        </span>
        <span className={`nft-artist-description `}>{artist.description}</span>{" "}
        <button
          className={`  ${followed ? "followed" : ""}`}
          onClick={() => {
            setFollow((prev) => !prev);
          }}
        >
          {followed ? (
            <span>
              following{" "}
              <motion.img
                variants={tagsMotion(0, 0.1)}
                initial="hidden"
                animate="visible"
                src={badge}
              />
            </span>
          ) : (
            "follow"
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ArtistComponent;
