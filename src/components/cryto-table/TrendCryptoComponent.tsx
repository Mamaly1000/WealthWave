import { CSSProperties, useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendCryptoCard from "../crypto-component/TrendCryptoCard";
import { useNavigate } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import Header from "../header-component/Header";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const TrendCryptoComponent = ({ header = false }: { header?: boolean }) => {
  const [displayTrendCoins, setDisplayTrendCoins] = useState<boolean>(false);
  const { getTrendCoins, cryptoSelector } = useCrypto();
  const fetch_trend_coins = getTrendCoins();
  const themeSelector = useSelector(selecttheme);
  const nav = useNavigate();
  return (
    <div className="trend-coins-container">
      <Header
        btnText="track more coins"
        header={header}
        height={5}
        onclick={() => {
          nav("/crypto");
        }}
        text="Trend Cryptocurrencies"
        width={250}
      />
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
        onAnimationComplete={() => {
          setDisplayTrendCoins(true);
        }}
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
          {!fetch_trend_coins.isLoading &&
            cryptoSelector.trend_coins.map((coin, index) => {
              return (
                <SwiperSlide
                  key={index}
                  onClick={() => nav(`/crypto/${coin!.item!.id}`)}
                >
                  {displayTrendCoins && (
                    <TrendCryptoCard coin={coin} index={index} />
                  )}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default TrendCryptoComponent;
