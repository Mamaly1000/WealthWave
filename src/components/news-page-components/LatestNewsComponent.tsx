import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const LatestNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={newsMotion(0.2, index / 2 + 0.1, "tween")}
      whileInView="side_visible"
      initial="side_hidden"
      exit="exit"
      viewport={{ once: true }}
      className="single-latest-news"
      onClick={() => window.open(news.url ? news.url : "", "_blank")}
      style={{ color: themeSelector.plainTextColor }}
    >
      <span className="news-title">{news.title}</span>
      <span className="news-publish">
        {moment(news.publishedAt).fromNow()} <div className="circle"></div>{" "}
      </span>
    </motion.div>
  );
};

export default LatestNewsComponent;
