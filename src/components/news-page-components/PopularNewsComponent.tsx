import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";

const PopularNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  return (
    <motion.div
      variants={newsMotion(0.2, index / 2 + 0.1, "tween")}
      animate="side_visible"
      initial="side_hidden"
      exit="exit"
      className="single-popular-news"
      onClick={() => window.open(news.url ? news.url : "", "_blank")}
    >
      <div className="circle"></div>
      <div className="news-data">
        <span className="news-publish">
          {moment(news.publishedAt).fromNow()}
        </span>
        <span className="news-title">{news.title}</span>
      </div>
    </motion.div>
  );
};

export default PopularNewsComponent;
