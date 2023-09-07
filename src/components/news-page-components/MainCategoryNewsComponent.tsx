import { IAppleNews } from "../../hooks/useNews";
import moment from "moment";
import { motion } from "framer-motion";
import { newsMotion } from "../../motions/newsMotions";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useSelector } from "react-redux";

const MainCategoryNewsComponent = ({ data }: { data: IAppleNews }) => {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={newsMotion(0.2, +0.1, "tween")}
      initial="hidden"
      whileInView="visible"
      className="main-category-news"
      onClick={() => window.open(data.url ? data.url : "", "_blank")}
    >
      <img src={data!.urlToImage as string} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <div className="news-extra">
        <span
          style={{
            background: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
        >
          {data.author}
        </span>
        <span
          style={{
            background: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
        >
          {data.source.name}
        </span>
        <span
          style={{
            background: themeSelector.btnColor,
            color: themeSelector.headerColor,
          }}
        >
          {moment(data.publishedAt).fromNow()}
        </span>
      </div>
    </motion.div>
  );
};

export default MainCategoryNewsComponent;
