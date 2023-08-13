import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";

const MainNewsComponent = ({ data }: { data: IAppleNews }) => {
  return (
    <motion.div
      variants={newsMotion(0.3, 0.6, "tween")}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="main-news"
      onClick={() => window.open(data.url ? data.url : "", "_blank")}
      style={{ backgroundImage: `url(${data.urlToImage})` }}
    >
      <div className="overlay">
        <h1 className="news-title">{data.title}</h1>
        <button>read more</button>
      </div>
      <div className="extra-data">
        <span className="news-publish">
          {moment(data.publishedAt).fromNow()}
        </span>{" "}
        <span className="news-publish">{data.author}</span>{" "}
        <span className="news-publish">{data.source.name}</span>
      </div>
    </motion.div>
  );
};

export default MainNewsComponent;
