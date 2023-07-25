import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import useNFT from "../../hooks/useNFT";
import Loader from "../loader/Loader";
import NFTpost from "./NFTpost";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import { useNavigate } from "react-router-dom";

const NFTslider = () => {
  const nav = useNavigate();
  const { getNftLst, loading, nftList } = useNFT();
  useEffect(() => {
    getNftLst(10);
  }, []);

  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="nft-list-slider"
    >
      <div className="nft-slider-container">
        <div className="nft-slider-header">
          <h2 className="page-header">Discover our NFT world</h2>
          <button onClick={() => nav("/nfts")}>whatch more</button>
        </div>
        <div className="nft-slider">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {!loading ? (
              nftList?.slice(0, 10).map((nft, index) => {
                return (
                  <SwiperSlide key={index}>
                    <NFTpost
                      name={nft.name}
                      price={nft.asset_platform_id}
                      symbol={nft.symbol}
                      index={index}
                    />
                  </SwiperSlide>
                );
              })
            ) : (
              <Loader />
            )}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTslider;
