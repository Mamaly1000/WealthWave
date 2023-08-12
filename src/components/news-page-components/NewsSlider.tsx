import { Swiper, SwiperSlide } from "swiper/react";
import { IAppleNews } from "../../hooks/useNews";
import { useMemo } from "react";

const NewsSlider = ({ category }: { category: IAppleNews[] }) => {
  const categoryLength = useMemo(() => {
    const slidesNumber = Math.ceil(category.length / 2);
    const array = [];
    for (let i = slidesNumber; i >= 0; i--) {
      array.push(i);
    }
    return array;
  }, [category]);

  return (
    <Swiper>
      {categoryLength.map((num) => {
        return (
          <SwiperSlide key={num}>
            <span>{category[num * num + num]?.author}</span>/
            <span>{category[num * num + (num + 1)]?.author}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewsSlider;
