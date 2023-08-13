import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useNews from "../../hooks/useNews";
import NewsPost from "./NewsPost";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import { useContextFunction } from "../../context/AppContext";
import { AppleNews } from "../../Data/news";
import SmallMainNewsComponent from "../news-page-components/SmallMainNewsComponent";
const NewsSection = () => {
  const nav = useNavigate();
  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="news-section"
    >
      <div className="news-section-header">
        <h2 className="page-header">Apple News Journal</h2>
        <button onClick={() => nav("/news")}>check out all news</button>
      </div>
      <div className="news-posts">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{ enabled: true, clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Autoplay, Pagination]}
        >
          {AppleNews.slice(0, 9).map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <SmallMainNewsComponent news={news} index={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default NewsSection;
