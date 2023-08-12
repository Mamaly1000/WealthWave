import React from "react";
import Divider from "../ntf-components/Divider";

const NewsHeadLines = ({ title }: { title: string }) => {
  return (
    <div className="news-headline">
      {title}
      <Divider width={200} height={5} />
    </div>
  );
};

export default NewsHeadLines;
