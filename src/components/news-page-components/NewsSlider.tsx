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
  const categoryLength = useMemo(() => {
    const slidesNumber = Math.ceil(category.length / 2);
    const array = [];
    for (let i = slidesNumber; i >= 0; i--) {
      array.push(i);
    }
    return array;
  }, [category]);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.5}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
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
