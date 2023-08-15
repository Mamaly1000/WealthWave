import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";

const LatestNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  return (
    <motion.div
      variants={newsMotion(0.2, index / 2 + 0.1, "tween")}
      whileInView="side_visible"
      initial="side_hidden"
      exit="exit"
      viewport={{ once: true }}
      className="single-latest-news"
      onClick={() => window.open(news.url ? news.url : "", "_blank")}
    >
      <span className="news-title">{news.title}</span>
      <span className="news-publish">
        {moment(news.publishedAt).fromNow()} <div className="circle"></div>{" "}
      </span>
    </motion.div>
  );
};

export default LatestNewsComponent;
