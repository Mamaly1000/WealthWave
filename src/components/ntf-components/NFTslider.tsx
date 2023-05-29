import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import useNFT from "../../hooks/useNFT";
import Loader from "../loader/Loader";
import NFTpost from "./NFTpost";

const NFTslider = () => {
  const { getNftLst, loading, nftList } = useNFT();
  useEffect(() => {
    getNftLst(10);
  }, []);
  const [space, setSpace] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 450) {
        setSpace(1.3);
      }
      if (window.innerWidth > 550) {
        setSpace(1.5);
      }
      if (window.innerWidth > 650) {
        setSpace(2);
      }
      if (window.innerWidth > 750) {
        setSpace(2.3);
      }
      if (window.innerWidth > 850) {
        setSpace(2.4);
      }
      if (window.innerWidth > 950) {
        setSpace(2.6);
      }
      if (window.innerWidth > 1050) {
        setSpace(2.8);
      }
      if (window.innerWidth > 1150) {
        setSpace(3.4);
      }
      if (window.innerWidth > 1150) {
        setSpace(3.8);
      }
    });
  }, [space]);
  return (
    <div className="nft-list-slider">
      <div className="nft-slider-container">
        <div className="nft-slider-header">
          <h3 className="page-header">Discover our NFT world</h3>
          <button>whatch more</button>
        </div>
        <div className="nft-slider">
          <Swiper
            slidesPerView={space ? space : "auto"}
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
    </div>
  );
};

export default NFTslider;
