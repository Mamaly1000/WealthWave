import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";

const PopularNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  return (
    <div className="single-popular-news">
      <div className="circle"></div>
      <div className="news-data">
        <span className="news-publish">
          {moment(news.publishedAt).fromNow()}
        </span>
        <span className="news-title">{news.title}</span>
      </div>
    </div>
  );
};

export default PopularNewsComponent;
