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
    <div
      className="single-latest-news"
      onClick={() => window.open(news.url ? news.url : "", "_blank")}
    >
      <span className="news-title">{news.title}</span>
      <span className="news-publish">
        {moment(news.publishedAt).fromNow()} <div className="circle"></div>{" "}
      </span>
    </div>
  );
};

export default LatestNewsComponent;
