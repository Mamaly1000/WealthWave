import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";

const SmallMainNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  return (
    <div
      className="single-small-news"
      style={{ backgroundImage: `url(${news.urlToImage})` }}
    >
      <div className="news-data">
        <div className="extras">
          <span>{moment(news.publishedAt).fromNow()}</span>
          <span>{news.source.name}</span>
          <span>{news.author}</span>
        </div>
        <h2 className="news-title">{news.title}</h2>
      </div>
    </div>
  );
};

export default SmallMainNewsComponent;
