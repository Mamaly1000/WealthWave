import { Swiper } from "swiper/react";
import { IAppleNews } from "../../hooks/useNews";
import MainCategoryNewsComponent from "./MainCategoryNewsComponent";
import NewsSlider from "./NewsSlider";

const NewsCategorySection = ({
  category,
  title,
  index,
}: {
  category: IAppleNews[];
  title: string;
  index: number;
}) => {
  return (
    <div className="single-news-section">
      <MainCategoryNewsComponent />
      <NewsSlider category={[...category.slice(1, category.length)]} />
    </div>
  );
};

export default NewsCategorySection;
