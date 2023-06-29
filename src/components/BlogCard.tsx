import { useNavigate } from "react-router-dom";
import { BlogComponentProps } from "../types/noteTypes";
import { motion } from "framer-motion";
const BlogCard = ({ id, title, tags }: BlogComponentProps) => {
  const nav = useNavigate();
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={.1}
      className="blog-card"
      key={id}
      onClick={() => nav(`/myBlogs/${id}`)}
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
              >
                {tag.label}
              </motion.span>
            );
          })}
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;
