import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useSelector } from "react-redux";

const MainNewsComponent = ({ data }: { data: IAppleNews }) => {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={newsMotion(0.3, 0.6, "tween")}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="main-news"
      onClick={() => window.open(data.url ? data.url : "", "_blank")}
      style={{ backgroundImage: `url(${data.urlToImage})` }}
    >
      <div className="overlay">
        <h1 className="news-title">{data.title}</h1>
        <button>read more</button>
      </div>
      <div className="extra-data">
        <span
          style={{
            color: themeSelector.headerColor,
            background: themeSelector.btnColor,
          }}
          className="news-publish"
        >
          {moment(data.publishedAt).fromNow()}
        </span>{" "}
        <span
          style={{
            color: themeSelector.headerColor,
            background: themeSelector.btnColor,
          }}
          className="news-publish"
        >
          {data.author}
        </span>{" "}
        <span
          style={{
            color: themeSelector.headerColor,
            background: themeSelector.btnColor,
          }}
          className="news-publish"
        >
          {data.source.name}
        </span>
      </div>
    </motion.div>
  );
};

export default MainNewsComponent;
