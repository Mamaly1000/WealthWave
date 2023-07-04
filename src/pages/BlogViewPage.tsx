import { useNavigate, useParams } from "react-router-dom";
import { BlogViewPageProps } from "../types/noteTypes";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import dateIcon from "./../assets/blogs/dateIcon.svg";
import authorIcon from "../assets/blogs/authorIcon.svg";
const BlogViewPage = ({ notes, onDelete }: BlogViewPageProps) => {
  const nav = useNavigate();
  const { id } = useParams();
  const blog = notes.find((note) => {
    return note.id === id;
  });
  if (blog === null) {
    nav("/myBlogs");
  }

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="blogView-page"
    >
      <div className="blogPage-header">
        <div className="blogPage-title">
          <h1>{blog?.title}</h1>
          <div>
            {blog?.tags.map((t) => {
              return (
                <span className="tag-badge" key={t.id}>
                  {t.label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="blogPage-controls">
          <button
            onClick={() => nav(`/myBlogs/${blog?.id}/editBlog`)}
            className="edit-blog-btn"
          >
            Edit
          </button>
          <button
            className="delete-blog-btn"
            onClick={() => {
              onDelete(blog!.id);
              nav(-1);
            }}
          >
            Delete
          </button>
          <button className="back-btn" onClick={() => nav("/myBlogs")}>
            Back
          </button>
        </div>
      </div>
      <div className="author-data-container">
        <img src="https://avatars.githubusercontent.com/u/105161078?v=4" />
        <div>
          <span className="author-email">
            {blog?.email} <img src={authorIcon} alt="author" />
          </span>
          <span className="blog-published-date">
            2023/12/02 <img src={dateIcon} alt="date icon" />
          </span>
        </div>
      </div>
      <div className="blog-description-container">
        <div className="blogpage-body">{blog?.body}</div>
        <img src={blog?.img} alt="blog-image" className="blog-image" />
      </div>
    </motion.div>
  );
};

export default BlogViewPage;
