import { dummyComments } from "../../Data/dummy";
import CommentPost from "./CommentPost";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";

const Comments = () => {
  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="comment-section"
    >
      <div className="comment-section-header">
        <h3 className="page-header">Wealth Wave impacts</h3>
        <button>what is your idea ?</button>
      </div>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          200: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          300: {
            spaceBetween: 20,
            slidesPerView: 1.1,
          },
          500: {
            spaceBetween: 10,
            slidesPerView: 1.2,
          },
          600: {
            slidesPerView: 1.4,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          950: {
            slidesPerView: 2.1,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 2.4,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 2.8,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3.2,
            spaceBetween: 5,
          },
        }}
      >
        {dummyComments.map((c, index) => (
          <SwiperSlide key={index}>
            <CommentPost data={c} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Comments;
