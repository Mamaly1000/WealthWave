import { useNavigate } from "react-router-dom";
import { BlogComponentProps } from "../types/noteTypes";

const BlogCard = ({ id, title, tags }: BlogComponentProps) => {
  const nav = useNavigate();
  return (
    <div className="blog-card" key={id} onClick={() => nav(`/myBlogs/${id}`)}>
      <h3>{title}</h3>
      <div className="tags-container">
        {tags.length > 0 &&
          tags.map((tag) => {
            return (
              <span className="tag-badge" key={tag.id}>
                {tag.label}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default BlogCard;
