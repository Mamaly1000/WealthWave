import { useNavigate } from "react-router-dom";
import { BlogComponentProps } from "../../types/noteTypes";
import { AnimatePresence, motion } from "framer-motion";
import { blogCardsMotions } from "../../motions/motions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const BlogCard = ({ id, title, tags, index }: BlogComponentProps) => {
  const nav = useNavigate();
  const themeSelector = useSelector(selecttheme);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={blogCardsMotions(index)}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          y: -10,
          background: themeSelector.containerColor,
        }}
        className="blog-card"
        exit="exit"
        style={{ color: themeSelector.headerColor }}
        viewport={{ once: true }}
        onClick={() => nav(`/myBlogs/${id}`)}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.1}
        drag
        whileDrag={{ opacity: 0.5, scale: 0.9, cursor: "grab" }}
        layout
      >
        <h3>{title}</h3>
        <motion.div className="tags-container">
          {tags.length > 0 &&
            tags.map((tag) => {
              return (
                <motion.span
                  drag
                  dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  className="tag-badge"
                  key={tag.id}
                  style={{
                    color: themeSelector.headerColor,
                    background: themeSelector.btnColor,
                  }}
                >
                  {tag.label}
                </motion.span>
              );
            })}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogCard;
