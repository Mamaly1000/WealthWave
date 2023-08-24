// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { EffectCreative, Pagination, Autoplay } from "swiper";
import SingleSlide from "./SingleSlide";

const sliderData: { title: string; pathName: string }[] = [
  {
    title:
      "discover the secrets of the cryptocurrency world with just one click !",
    pathName: "/crypto",
  },
  {
    title:
      "share your thoughts and insights on the world of cryptocurrency and news by contributing to our blog section .",
    pathName: "/myBlogs",
  },
  {
    title:
      "keep your finger on the pulse of the financial world and reading the latest news from wallstreet journal .",
    pathName: "/news",
  },
  {
    title:
      "create your profile today and gain access to a wealth of financial resources , including expert advice and market insights .",
    pathName: "/dashboard",
  },
];

export default function CubeSlider() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
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
      >
        {sliderData.map((data, index) => (
          <SwiperSlide key={index}>
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
