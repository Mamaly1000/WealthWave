import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import { wordSeprator } from "./HomePageIntro";

const sliderData = [
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
  const nav = useNavigate();
  return (
    <div className="home-page-intro-slider">
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
        {sliderData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <h3>{wordSeprator(data.title)}</h3>
              <button onClick={() => nav(data.pathName)}>click now!</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
