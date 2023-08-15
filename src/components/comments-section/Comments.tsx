import { dummyComments } from "../../Data/dummy";
import CommentPost from "./CommentPost";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import Header from "../header-component/Header";

const Comments = () => {
  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="comment-section"
    >
      <Header
        btnText="what is your idea ?"
        header={true}
        height={5}
        onclick={() => {}}
        text="Wealth Wave impacts"
        width={250}
      />
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
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
