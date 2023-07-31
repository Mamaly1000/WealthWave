import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNFT from "../hooks/useNFT";
import closeIcon from "./../assets/crypto/close.svg";
import backIcon from "./../assets/crypto/back.svg";
import saveIcon from "./../assets/crypto/save.svg";
import shareIcon from "./../assets/crypto/share.svg";
import { socialMedia } from "../Data/dummy";
import { useDispatch } from "react-redux";
import starIcon from "./../assets/crypto/star.svg";
import { emptySingleNFT } from "../features/nft_slice/nft_slice";
import { motion } from "framer-motion";
import discordIcon from "./../assets/nft/icons8-discord.svg";
import twitterIcon from "./../assets/nft/icons8-twitter (1).svg";
import homepageIcon from "./../assets/nft/homeIcon.svg";
import { viewFromLeft, viewFromTop } from "../motions/viewCryptoMotions";
import RelatedNFT from "../components/ntf-components/RelatedNFT";
const Nft_Single_Page = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [randomNum] = useState(Math.floor(Math.random() * socialMedia.length));
  const { id } = useParams();
  const {
    getSingleNft,
    nftSelector: { single_nft, nft_list },
  } = useNFT();
  const [randomnftNum] = useState(Math.floor(Math.random() * nft_list.length));
  const fetchSingleNFT = getSingleNft(
    id as string,
    true,
    true,
    true,
    false,
    5000
  );
  const boxData: {
    title: string;
    nativePrice: number;
    price: number;
    percentage: number;
  }[] = [
    {
      title: `${single_nft.symbol} floor price`,
      nativePrice: single_nft.floor_price.native_currency,
      price: single_nft.floor_price.usd,
      percentage: single_nft.floor_price_in_usd_24h_percentage_change,
    },
    {
      title: "Market Cap",
      nativePrice: single_nft.market_cap.native_currency,
      price: single_nft.market_cap.usd,
      percentage: single_nft.market_cap_24h_percentage_change.usd,
    },
    {
      title: "24h Volume",
      nativePrice: single_nft.volume_24h.native_currency,
      price: single_nft.volume_24h.usd,
      percentage: single_nft.volume_24h_percentage_change.usd,
    },
  ];
  const statistisData = [
    {
      title: `${single_nft.name} Floor Price`,
      value: [
        single_nft.floor_price.native_currency
          ? `${single_nft.floor_price.native_currency} ETH`
          : "N/A",
      ],
    },
    {
      title: `Market Cap`,
      value: [
        single_nft.market_cap.native_currency
          ? `${single_nft.market_cap.native_currency} ETH`
          : "N/A",
      ],
    },
    {
      title: `24h Volume`,
      value: [
        single_nft.volume_24h.native_currency
          ? `${single_nft.volume_24h.native_currency} ETH`
          : "N/A",
      ],
    },
    {
      title: `Owners`,
      value: [
        single_nft.number_of_unique_addresses
          ? single_nft.number_of_unique_addresses
          : "N/A",
        single_nft.number_of_unique_addresses_24h_percentage_change,
      ],
    },
    {
      title: `Total Assets`,
      value: [single_nft.total_supply ? single_nft.total_supply : "N/A"],
    },
  ];
  return (
    <div className="single-nft-page">
      <motion.div
        variants={viewFromLeft(1, 0.5)}
        initial="hidden"
        animate="visible"
        className="overall-nft-data"
      >
        <img src={single_nft.image.small} />
        <h1 className="nft-name">{single_nft.name}</h1>
        <span className="nft-symbol">{single_nft.symbol}</span>
      </motion.div>
      <div className="community-actions-container">
        <div className="communities">
          <h3>communities :</h3>
          <div>
            {socialMedia.map((social, index) => {
              return (
                <span key={index}>
                  <img src={social.pic} /> {social.name}{" "}
                </span>
              );
            })}
          </div>
        </div>
        <div className="actions-container">
          <div>
            <button
              onClick={() => {
                nav(-1);
                dispatch(emptySingleNFT());
              }}
            >
              <img src={backIcon} />
            </button>
            <button>
              <img src={saveIcon} />
            </button>
            <button
              onClick={() => {
                navigator.share({
                  url: window.location.href,
                  text: `check out our website to track ${single_nft.name} nft`,
                  title: single_nft.name,
                });
              }}
            >
              <img src={shareIcon} />
            </button>
          </div>
          <span className="wish-list">
            <img src={starIcon} />
            on {randomNum * 213 + 23 - 213} watchlist
          </span>
        </div>
      </div>
      <div className="nft-prices-containers">
        {boxData.map((data, index) => {
          return (
            <motion.div
              variants={viewFromTop(index, 0.5)}
              initial="hidden"
              whileInView="visible"
              className="detail-box"
              key={index}
            >
              <span className="title-container">{data.title}</span>
              <div className="price-container">{data.nativePrice} ETH</div>
              <div className="percentage-container">
                ${data.price}
                <span className={`${data.percentage > 0 ? "green" : "red"}`}>
                  {data.percentage}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="nft-bottom-section">
        <div className="left-section">
          <div className="top-desc">
            <h2 className="name">{single_nft.name}</h2>
            <div className="links-container">
              {single_nft.links.discord &&
                single_nft.links.discord.length > 0 && (
                  <span
                    onClick={() =>
                      window.open(single_nft.links.discord, "_blank")
                    }
                  >
                    <img src={discordIcon} />
                  </span>
                )}
              {single_nft.links.homepage &&
                single_nft.links.homepage.length > 0 && (
                  <span
                    onClick={() =>
                      window.open(single_nft.links.homepage, "_blank")
                    }
                  >
                    <img src={homepageIcon} />
                  </span>
                )}{" "}
              {single_nft.links.twitter &&
                single_nft.links.twitter.length > 0 && (
                  <span
                    onClick={() =>
                      window.open(single_nft.links.twitter, "_blank")
                    }
                  >
                    <img src={twitterIcon} />
                  </span>
                )}
            </div>
          </div>
          <div className="bottom-desc">
            <p dangerouslySetInnerHTML={{ __html: single_nft.description }}></p>
            {single_nft.contract_address &&
              single_nft.contract_address.length > 0 && (
                <span className="contract-add">
                  contract-address : {single_nft.contract_address}
                </span>
              )}
          </div>
        </div>
        <div className="right-section">
          <div className="nft-statistic">
            <h4 className="boxheader">{single_nft.name} Market Statistics</h4>
            <div className="table-container">
              {statistisData.map((data, index) => {
                return (
                  <div className="item" key={index}>
                    <span className="item-title">{data.title}</span>
                    <span className="item-value">
                      {data.value[0]}{" "}
                      {data.value.length > 1 ? (
                        <span
                          className={`${+data.value[1] < 0 ? "red" : "green"}`}
                        >
                          {data.value[1] ? data.value[1] + "%" : "N/A"}
                        </span>
                      ) : (
                        ""
                      )}{" "}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="related-nfts">
            <h4>related nfts</h4>
            <div className="table-container">
              {nft_list
                .slice(randomnftNum - 7, randomnftNum)
                .map((nft, index) => {
                  return <RelatedNFT key={index} nft={nft} index={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft_Single_Page;
