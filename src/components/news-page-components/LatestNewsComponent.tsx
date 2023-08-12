import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";

const LatestNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  return (
    <div className="single-latest-news">
      <span className="news-title">{news.title}</span>
      <span className="news-publish">{moment(news.publishedAt).fromNow()}</span>
    </div>
  );
};

export default LatestNewsComponent;
