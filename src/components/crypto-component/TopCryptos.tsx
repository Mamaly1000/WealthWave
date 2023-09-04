import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { selectCrypto } from "../../features/crypto_slice/crypto_slice";
import TopCryptoCard from "./TopCryptoCard";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const TopCryptos = () => {
  const cryptoSelector = useSelector(selectCrypto);
  const nav = useNavigate();
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1,
        type: "tween",
      }}
      viewport={{ once: true }}
      className="top-crypto"
    >
      <Swiper
        className="top-crypto"
        spaceBetween={10}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        style={
          {
            "--swiper-pagination-bullet-inactive-color": "rgba(0 0 0/.9)",
            "--swiper-pagination-color": themeSelector.btnColor,
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as CSSProperties
        }
      >
        {cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
          return (
            <SwiperSlide key={index} onClick={() => nav(`/crypto/${coin.id}`)}>
              <TopCryptoCard coin={coin} index={index} key={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TopCryptos;
