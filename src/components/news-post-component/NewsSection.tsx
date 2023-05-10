import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const NewsSection = () => {
  const nav = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<string>(
    "WallStreet Journal News"
  );
  const [space, setSpace] = useState<number>(0);
  const [slides, setSlides] = useState<number>(0);
  const getingSpace = () => {
    return window.addEventListener("resize", () => {
      if (window.innerWidth > 450) {
        setSlides(.9);
        setSpace(10);
      }
      if (window.innerWidth > 550) {
        setSlides(1.1);
        setSpace(1.5);
      }
      if (window.innerWidth > 650) {
        setSlides(1.1);
        setSpace(2);
      }
      if (window.innerWidth > 750) {
        setSlides(1.1);
        setSpace(2.3);
      }
      if (window.innerWidth > 850) {
        setSlides(1.1);
        setSpace(2.4);
      }
      if (window.innerWidth > 950) {
        setSlides(1.1);
        setSpace(2.6);
      }
      if (window.innerWidth > 1050) {
        setSlides(1.1);
        setSpace(2.8);
      }
      if (window.innerWidth > 1150) {
        setSlides(1.1);
        setSpace(15);
      }
      if (window.innerWidth > 1150) {
        setSlides(1.1);
        setSpace(15);
      }
    });
  };
  useEffect(() => {
    getingSpace();
  }, [space]);
  return (
    <div className="news-section">
      <div className="news-section-header">
        <h1 className="page-header">News Section</h1>
        <button onClick={() => nav("/news")}>check out all news</button>
      </div>
      <div className="news-topics">
        <Swiper
          slidesPerView={slides}
          slidesPerGroupSkip={slides*2}
          grabCursor={true}
          spaceBetween={space}
          scrollbar={true}
          modules={[Scrollbar]}
          className="mySwiper"
          style={{ width: "100%" }}
          loop={true}
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
                <button
                  className={` ${
                    selectedTopic === topic ? "selected-topic" : ""
                  }`}
                >
                  {topic}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewsSection;
