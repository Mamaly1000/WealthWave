import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import useNFT from "../../hooks/useNFT";
import Loader from "../loader/Loader";
import NFTpost from "./NFTpost";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import { useNavigate } from "react-router-dom";
import Header from "../header-component/Header";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { CSSProperties } from "react";

const NFTslider = () => {
  const nav = useNavigate();
  const { getNftLst, nftSelector } = useNFT();
  const fetchNfts = getNftLst("get-all-nfts", true, true, true, false, 5000);
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="nft-list-slider"
    >
      <div className="nft-slider-container">
        <Header
          btnText="whatch more"
          header={true}
          height={5}
          width={250}
          onclick={() => nav("/nfts")}
          text="Discover our NFT world"
        />
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
            style={
              {
                "--swiper-pagination-bullet-inactive-color": "rgba(0 0 0/.9)",
                "--swiper-pagination-color": themeSelector.btnColor,
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
              } as CSSProperties
            }
          >
            {!fetchNfts.isLoading ? (
              nftSelector.nft_list?.slice(0, 10).map((nft, index) => {
                return (
                  <SwiperSlide key={index}>
                    <NFTpost
                      name={nft.name}
                      price={nft.asset_platform_id}
                      symbol={nft.symbol}
                      index={index}
                      id={nft.id}
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
