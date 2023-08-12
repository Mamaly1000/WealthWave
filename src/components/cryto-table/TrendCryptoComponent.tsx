import { useState } from "react";
import useCrypto from "../../hooks/useCrypto";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendCryptoCard from "../crypto-component/TrendCryptoCard";
import { useNavigate } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";

const TrendCryptoComponent = ({ header = false }: { header?: boolean }) => {
  const [displayTrendCoins, setDisplayTrendCoins] = useState<boolean>(false);
  const { getTrendCoins, cryptoSelector } = useCrypto();
  const fetch_trend_coins = getTrendCoins();
  const nav = useNavigate();
  return (
    <div className="trend-coins-container">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.5,
          duration: 3,
          type: "tween",
          x: {
            duration: 3,
          },
        }}
        className="component-title crypto-table-header page-header"
      >
        <h2>Trend Cryptocurrencies</h2>
        {header && (
          <button
            onClick={() => {
              nav("/crypto");
            }}
          >
            track more coins
          </button>
        )}
      </motion.div>
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
