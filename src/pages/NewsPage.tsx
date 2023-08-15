import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import MainNewsComponent from "../components/news-page-components/MainNewsComponent";
import LatestNewsComponent from "../components/news-page-components/LatestNewsComponent";
import SmallMainNewsComponent from "../components/news-page-components/SmallMainNewsComponent";
import {
  AppleNews,
  TechCrunchnews,
  teslaNews,
  wallstreetnews,
  Top_business_headlines,
} from "../Data/news";
import PopularNewsComponent from "../components/news-page-components/PopularNewsComponent";
import Divider from "../components/ntf-components/Divider";
import NewsCategorySection from "../components/news-page-components/NewsCategorySection";
import NewsSearch from "../components/search-components/NewsSearch";
import { useState } from "react";
import NewsCardsSection from "../components/news-page-components/NewsCardsSection";
const NewsPage = () => {
  const categories = [
    {
      title: "wallstreet journal",
      data: wallstreetnews,
    },
    {
      title: "TechCrunchnews journal",
      data: TechCrunchnews,
    },
    {
      title: "Top business headlines",
      data: Top_business_headlines,
    },
    {
      title: "tesla journal",
      data: teslaNews,
    },
    {
      title: "Apple journal",
      data: AppleNews,
    },
  ];
  const [text, setText] = useState<string>("");

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="news-page"
    >
      <div className="news-page-intro">
        <div className="small-news">
          {wallstreetnews.slice(40, 44).map((n, index) => {
            return (
              <SmallMainNewsComponent news={n} index={index} key={index} />
            );
          })}
        </div>
        <MainNewsComponent data={wallstreetnews[50]} />
        <div className="latest-news">
          <span className="title">
            live updates<div></div>
          </span>
          {wallstreetnews.slice(10, 16).map((n, index) => {
            return <LatestNewsComponent key={index} news={n} index={index} />;
          })}
        </div>
      </div>
      <div className="bottom-section">
        <div className="news-categories">
          {categories.map((c, index) => {
            return (
              <NewsCategorySection
                category={c.data}
                title={c.title}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <div className="popular-news">
          <span className="title">
            popular news
            <Divider height={2} width={250} />
          </span>
          {wallstreetnews.slice(50, 70).map((n, index) => {
            return <PopularNewsComponent news={n} index={index} key={index} />;
          })}
        </div>
      </div>
      <div className="news-cards-container">
        <NewsSearch
          value={text}
          onchange={(e) => {
            setText(e.target.value);
          }}
        />
        {categories.map((category, index) => {
          return (
            <NewsCardsSection
              category={category}
              key={index}
              searchedText={text}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default NewsPage;
