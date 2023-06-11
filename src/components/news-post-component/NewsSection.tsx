import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useNews from "../../hooks/useNews";
import NewsPost from "./NewsPost";

const NewsSection = () => {
  const nav = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string>(
    "WallStreet Journal News"
  );
  const { appleNewsList, getAppleNews } = useNews();
  useEffect(() => {
    getAppleNews();
  }, []);
  useEffect(() => {
    if (appleNewsList.length > 0) {
      console.log(appleNewsList);
    }
  }, [appleNewsList]);
  return (
    <div className="news-section">
      <div className="news-section-header">
        <h2 className="page-header">News</h2>
        <button onClick={() => nav("/news")}>check out all news</button>
      </div>
      <div className="news-topics">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          className="mySwiper"
          style={{ paddingBlock: "10px" }}
        >
          {[
            "WallStreet Journal News",
            "Apple company",
            "Apple company head-lines",
            "Tesla company",
            "Tesla company head-lines",
            "Top business head-lines(tech-crunch)",
            "Top business head-lines",
            "Top business(tech-crunch)",
          ].map((topic, index) => {
            return (
              <SwiperSlide
                className={`news-topic-btns`}
                key={index}
                onClick={() => setSelectedTopic(topic)}
              >
                <div
                  className={` ${
                    selectedTopic === topic ? "selected-topic" : ""
                  }`}
                >
                  {topic}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="news-posts">
        {appleNewsList.length > 0 &&
          appleNewsList.slice(0, 20).map((news, index) => {
            return (
              <NewsPost news={news} id={index} key={index} index={index} />
            );
          })}
      </div>
    </div>
  );
};

export default NewsSection;
