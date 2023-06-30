import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import useNFT from "../../hooks/useNFT";
import Loader from "../loader/Loader";
import NFTpost from "./NFTpost";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";

const NFTslider = () => {
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
          <h3 className="page-header">Discover our NFT world</h3>
          <button>whatch more</button>
        </div>
        <div className="nft-slider">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
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
