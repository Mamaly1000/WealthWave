import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

const SmallMainNewsComponent = ({
  news,
  index,
}: {
  news: IAppleNews;
  index: number;
}) => {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={newsMotion(0.3, index / 2 + 0.1, "tween")}
      whileInView="visible"
      initial="hidden"
      exit="exit"
      viewport={{ once: true }}
      className="single-small-news"
      style={{
        backgroundImage: news.urlToImage ? `url(${news?.urlToImage})` : "none",
      }}
      onClick={() => window.open(news.url ? news.url : "", "_blank")}
    >
      <div className="news-data">
        <div className="extras">
          <motion.span animate={{ background: themeSelector.btnColor }}>
            {moment(news!.publishedAt).fromNow()}
          </motion.span>
          <motion.span animate={{ background: themeSelector.btnColor }}>
            {news!.source?.name}
          </motion.span>
          {news.author && (
            <motion.span animate={{ background: themeSelector.btnColor }}>
              {news.author.length > 30
                ? news.author?.slice(0, 30) + " ..."
                : news?.author}
            </motion.span>
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
    </motion.div>
  );
};

export default SmallMainNewsComponent;
