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
      style={{
        backgroundImage: news.urlToImage ? `url(${news?.urlToImage})` : "none",
      }}
    >
      <div className="news-data">
        <div className="extras">
          <span>{moment(news!.publishedAt).fromNow()}</span>
          <span>{news!.source?.name}</span>
          {news.author && (
            <span>
              {news.author.length > 30
                ? news.author?.slice(0, 30) + " ..."
                : news?.author}
            </span>
          )}
        </div>
        {news.title && (
          <h2 className="news-title">
            {news.title.length > 80
              ? news.title.slice(0, 80) + " ..."
              : news.title}
          </h2>
        )}
      </div>
    </div>
  );
};

export default SmallMainNewsComponent;
