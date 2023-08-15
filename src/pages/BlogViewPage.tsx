import { useNavigate, useParams } from "react-router-dom";
import { BlogViewPageProps } from "../types/noteTypes";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import dateIcon from "./../assets/blogs/dateIcon.svg";
import authorIcon from "../assets/blogs/authorIcon.svg";
import {
  tagsMotions,
  viewBlogActionButtons,
} from "../motions/view_blog_motions";
import { useEffect, useRef, useState } from "react";
import defailtImage from "./../assets/blogs/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.avif";
import moment from "moment";
import Header from "../components/header-component/Header";
const BlogViewPage = ({ notes, onDelete }: BlogViewPageProps) => {
  const nav = useNavigate();
  const { id } = useParams();
  const blog = notes.find((note) => {
    return note.id === id;
  });
  if (blog === null) {
    nav("/myBlogs");
  }
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const blogImageRef = useRef<HTMLElement>(null);
  useEffect(() => {
    blogImageRef.current?.addEventListener("load", () => {
      setImageLoading(true);
    });
  }, []);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      onAnimationComplete={() => setShow(true)}
      className="blogView-page"
    >
      {show && (
        <div className="blogPage-header">
          <div className="blogPage-title">
            <Header
              btnText=""
              header={false}
              height={5}
              onclick={() => {}}
              text={blog!.title}
              width={300}
            />
            <div>
              {blog?.tags.map((t, index) => {
                return (
                  <motion.span
                    variants={tagsMotions(index)}
                    initial="hidden"
                    animate="visible"
                    className="tag-badge"
                    key={t.id}
                  >
                    {t.label}
                  </motion.span>
                );
              })}
            </div>
          </div>
          <div className="blogPage-controls">
            <motion.button
              variants={viewBlogActionButtons(0.5)}
              initial="hidden"
              animate="visible"
              onClick={() => nav(`/myBlogs/${blog?.id}/editBlog`)}
              className="edit-blog-btn"
            >
              Edit
            </motion.button>
            <motion.button
              variants={viewBlogActionButtons(0.7)}
              initial="hidden"
              animate="visible"
              className="delete-blog-btn"
              onClick={() => {
                onDelete(blog!.id);
                nav(-1);
              }}
            >
              Delete
            </motion.button>
            <motion.button
              variants={viewBlogActionButtons(0.9)}
              initial="hidden"
              animate="visible"
              className="back-btn"
              onClick={() => nav("/myBlogs")}
            >
              Back
            </motion.button>
          </div>
        </div>
      )}
      {show && (
        <div className="author-data-container">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="loading-animation"
            transition={{ duration: 0.5, delay: 1, type: "tween" }}
            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
          />
          <div>
            <motion.span
              variants={viewBlogActionButtons(0.5)}
              initial="hidden"
              animate="visible"
              className="author-email"
            >
              {blog?.email} <img src={authorIcon} alt="author" />
            </motion.span>
            <motion.span
              variants={viewBlogActionButtons(0.7)}
              initial="hidden"
              animate="visible"
              className="blog-published-date"
            >
              {moment(blog?.published_date).format("YYYY-MM-DD HH:MM")}{" "}
              <img src={dateIcon} alt="date icon" />
            </motion.span>
          </div>
        </div>
      )}
      {show && (
        <div className="blog-description-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            className="blogpage-body"
          >
            {blog?.body}
          </motion.div>
          <div
            className={`blog-image ${!imageLoading ? "loading-animation" : ""}`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: imageLoading ? 1 : 0,
                scale: imageLoading ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 1, type: "tween" }}
              ref={blogImageRef}
              src={blog?.img}
              alt="blog-image"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogViewPage;
