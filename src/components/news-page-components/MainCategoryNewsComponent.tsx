import React from "react";
import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";

const MainCategoryNewsComponent = ({ data }: { data: IAppleNews }) => {
  return (
    <div className="main-category-news">
      <img src={data!.urlToImage as string} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="news-extra">
        <span>{data.author}</span>
        <span>{data.source.name}</span>
        <span>{moment(data.publishedAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default MainCategoryNewsComponent;
