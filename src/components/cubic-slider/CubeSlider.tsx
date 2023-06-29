// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { EffectCube, Pagination, Autoplay } from "swiper";
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
    pathName: "/profile",
  },
];

export default function CubeSlider() {
  return (
    <motion.div
      initial={{ opacity: 0.2, transform: "translateX(200px)" }}
      animate={{ opacity: 1, transform: "translateX(0px)" }}
      className="home-page-intro-slider"
    >
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((data, index) => (
          <SwiperSlide>
            <SingleSlide key={index} data={data} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
