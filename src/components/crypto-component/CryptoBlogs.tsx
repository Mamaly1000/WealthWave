import { useSelector } from "react-redux";
import { cryptoNews } from "../../Data/cryptoNews";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { motion } from "framer-motion";

const CryptoBlogs = () => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="crypto-blogs-section">
      <div className="main-blog">
        <img src={cryptoNews[0].image} />
        <div
          style={{ background: themeSelector.hoverColor }}
          className="content-section"
        >
          <h3 style={{ color: themeSelector.headerColor }}>
            {cryptoNews[0].title}
          </h3>
          <div className="blog-extras">
            {[
              cryptoNews[0].author,
              cryptoNews[0].category,
              cryptoNews[0].date,
              cryptoNews[0].source,
            ].map((d) => {
              return (
                <span
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                  key={d}
                >
                  {d}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      {cryptoNews.slice(1, cryptoNews.length).map((news) => {
        return (
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: `0 10px 5px ${themeSelector.btnColor}`,
            }}
            transition={{ duration: 0.1 }}
            className="single-blog"
            style={{ background: themeSelector.containerColor }}
            key={news.author}
          >
            <img src={news.image} />

            <h3 style={{ color: themeSelector.headerColor }}>{news.title}</h3>
            <p style={{ color: themeSelector.plainTextColor }}>
              {news.content}
            </p>
            <div className="blog-extras">
              {[news.source, news.category].map((d) => {
                return (
                  <span
                    style={{
                      color: themeSelector.headerColor,
                      borderColor: themeSelector.btnColor,
                    }}
                    key={d}
                  >
                    {d.slice(0, 10) + "..."}
                  </span>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CryptoBlogs;
