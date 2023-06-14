import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useNews from "../../hooks/useNews";
import NewsPost from "./NewsPost";
import { Autoplay } from "swiper";
const NewsSection = () => {
  const nav = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string>("WallStreet");
  const { appleNewsList, getAppleNews, getWallStreetNews } = useNews();
  useEffect(() => {
    getAppleNews();
    getWallStreetNews();
  }, []);
  useEffect(() => {
    if (appleNewsList.length > 0) {
      // console.log(appleNewsList);
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
            340: {
              slidesPerView: 1.5,
              spaceBetween: 2,
            },
            540: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
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
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
          style={{ paddingBlock: "10px" }}
          autoplay={{
            disableOnInteraction: false,
            delay: 5000,
          }}
          modules={[Autoplay]}
        >
          {[
            "WallStreet",
            "Apple",
            "Apple head-lines",
            "Tesla",
            "Tesla head-lines",
            "Top business",
            "Top business head-lines",
          ].map((topic, index) => {
            return (
              <SwiperSlide
                className={`news-topic-btns  ${
                  selectedTopic === topic ? "selected-topic" : ""
                }`}
                key={index}
                onClick={() => setSelectedTopic(topic)}
              >
                <div
                // style={{ fontSize: topic.length > 20 ? "10px" : "1rem" }}
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
          appleNewsList.slice(0, 9).map((news, index) => {
            return (
              <NewsPost news={news} id={index} key={index} index={index} />
            );
          })}
      </div>
    </div>
  );
};

export default NewsSection;
