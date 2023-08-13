import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";

const MainCategoryNewsComponent = ({ data }: { data: IAppleNews }) => {
  return (
    <motion.div
      variants={newsMotion(0.2, +0.1, "tween")}
      initial="hidden"
      whileInView="visible"
      className="main-category-news"
      onClick={() => window.open(data.url ? data.url : "", "_blank")}
    >
      <img src={data!.urlToImage as string} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="news-extra">
        <span>{data.author}</span>
        <span>{data.source.name}</span>
        <span>{moment(data.publishedAt).fromNow()}</span>
      </div>
    </motion.div>
  );
};

export default MainCategoryNewsComponent;
