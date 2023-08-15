 
import { IAppleNews } from "../../hooks/useNews";
import MainCategoryNewsComponent from "./MainCategoryNewsComponent";
import NewsSlider from "./NewsSlider";
import NewsHeadLines from "./NewsHeadLines";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";

const NewsCategorySection = ({
  category,
  title,
  index,
}: {
  category: IAppleNews[];
  title: string;
  index: number;
}) => {
  const categoryPattern = [
    {
      item_1: 0,
      item_2: 1,
    },
    {
      item_1: 2,
      item_2: 3,
    },
    {
      item_1: 4,
      item_2: 5,
    },
    {
      item_1: 6,
      item_2: 7,
    },
  ];
  return (
    <motion.div
      variants={newsMotion(0.2, index / 2 + 0.1, "tween")}
      initial="side_hidden"
      whileInView="side_visible"
      exit="exit"
      viewport={{ once: true }}
      className="single-news-section"
    >
      <NewsHeadLines title={title} />
      <MainCategoryNewsComponent data={category[9]} />
      <NewsSlider
        pattern={categoryPattern}
        category={[...category.slice(1, category.length)]}
      />
    </motion.div>
  );
};

export default NewsCategorySection;
