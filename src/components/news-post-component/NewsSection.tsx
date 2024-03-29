import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import { AppleNews } from "../../Data/news";
import SmallMainNewsComponent from "../news-page-components/SmallMainNewsComponent";
import Header from "../header-component/Header";
import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const NewsSection = () => {
  const nav = useNavigate();
  const themeSelector = useSelector(selecttheme);
  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="news-section"
    >
      <Header
        btnText="check out all news"
        header={true}
        height={5}
        width={250}
        onclick={() => nav("/news")}
        text="Apple News Journal"
      />
      <div className="news-posts">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{ enabled: true, clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          modules={[Autoplay, Pagination]}
          style={
            {
              "--swiper-pagination-bullet-inactive-color": "rgba(0 0 0/.9)",
              "--swiper-pagination-color": themeSelector.btnColor,
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            } as CSSProperties
          }
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
