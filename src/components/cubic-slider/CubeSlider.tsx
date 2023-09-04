// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { EffectCreative, Pagination, Autoplay } from "swiper";
import SingleSlide from "./SingleSlide";
import { sliderData } from "../../Data/dummy";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { CSSProperties } from "react";

export default function CubeSlider() {
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{
        opacity: 1,
        x: 0,
        boxShadow: `0 10px 20px 20px rgba(0 0 0/.3)`,
      }}
      transition={{ duration: 0.5, delay: 1, type: "tween" }}
      className="home-page-intro-slider"
    >
      <Swiper
        grabCursor={true}
        pagination={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
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
        {sliderData.map((data, index) => (
          <SwiperSlide key={index} style={{ background: data.bg_color }}>
            {({ isActive }) => (
              <SingleSlide
                active={isActive}
                key={index}
                data={data}
                index={index}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
