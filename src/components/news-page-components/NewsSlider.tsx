import { Swiper, SwiperSlide } from "swiper/react";
import { IAppleNews } from "../../hooks/useNews";
import { useMemo } from "react";
import NewsSingleSlide from "./NewsSingleSlide";
import { Autoplay } from "swiper";

const NewsSlider = ({
  pattern,
  category,
}: {
  category: IAppleNews[];
  pattern: { item_1: number; item_2: number }[];
}) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={"auto"}
      autoplay={{ delay: 2000, disableOnInteraction: true }}
      modules={[Autoplay]}
    >
      {pattern.map((item) => {
        return (
          <SwiperSlide key={item.item_1}>
            <NewsSingleSlide
              news_1={category[item.item_1]}
              news_2={category[item.item_2]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewsSlider;
