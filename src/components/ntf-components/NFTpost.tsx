import React, { useState } from "react";
import { nftPics, randomUserData } from "../../Data/dummy";
type nftPostType = {
  name: string;
  price: string;
  symbol: string;
};

const NFTpost = ({ name, price, symbol }: nftPostType) => {
  const [nftOwner, setNftOwner] = useState(
    randomUserData[Math.floor(Math.random() * randomUserData.length)]
  );
  const [liked, setLiking] = useState<boolean>(false);
  const [doubleClicked, setDoubledClick] = useState<boolean>(false);
  const [nftPic, setNftPic] = useState<string>(
    nftPics[Math.floor(Math.random() * nftPics.length)]
  );
  const [nftPrice, setNftPrice] = useState<number>(
    Math.floor((Math.random() * 123423400) / 1000000) / 100
  );
  const displayLikeIcon = () => {
    setDoubledClick(true);
    setLiking((prev) => !prev);
    setTimeout(() => {
      setDoubledClick(false);
    }, 500);
  };
  return (
    <div className="nft-post-component" onDoubleClick={() => displayLikeIcon()}>
      <img className="nft-post-pic" src={nftPic} alt="nft image" />
      <div className="nft-post-data">
        <div className="ntf-owner-data">
          <h5
            className={`nft-post-name ${
              name.length > 10 ? "small-text" : "big-text"
            }`}
          >
            {name}
          </h5>
          <span className="nft-post-price">
            {price === "ethereum" && "ETH "}
            {price === "polygon-pos" && "PLS "}
            {nftPrice}
          </span>
          <span className="nft-owner-name">{nftOwner.name}</span>
          <span className="nft-owner-email">{nftOwner.email}</span>
        </div>
        <div className="nft-post-actions">
          <div>
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
          </div>
          <button className="read-more-btn">read more</button>
        </div>
      </div>
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
    </div>
  );
};

export default NFTpost;
