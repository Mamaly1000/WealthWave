import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import SmallMainNewsComponent from "./SmallMainNewsComponent";

const NewsSingleSlide = ({
  news_1,
  news_2,
}: {
  news_1: IAppleNews;
  news_2: IAppleNews;
}) => {
  return (
    <div className="news-slide">
      <SmallMainNewsComponent index={1} news={news_1} />
      <SmallMainNewsComponent index={2} news={news_2} />
    </div>
  );
};

export default NewsSingleSlide;
