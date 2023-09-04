import like from "../../assets/comments/like.svg";
import save from "../../assets/comments/save.svg";
import filled_saved from "../../assets/comments/flled-saved.svg";
import dislike from "../../assets/comments/dislike.svg";
import { CommentType } from "../../types/noteTypes";
import { motion } from "framer-motion";
import { commentsMotion } from "../../motions/motions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
type commentPostType = {
  data: CommentType;
  index: number;
};
const CommentPost = ({ data, index }: commentPostType) => {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={commentsMotion(index)}
      initial="hidden"
      whileInView="view"
      className="comment"
      viewport={{ once: true }}
      whileHover={{
        background: themeSelector.containerColor,
        cursor: "default",
      }}
    >
      <div className="comment-user-data">
        <div className="comment-user-image">
          <img src={data.profilePicUrl} alt="" />
        </div>
        <div className="comment-user-name">
          <motion.span
            animate={{ color: themeSelector.headerColor }}
            className="name"
          >
            {data.name}
          </motion.span>
          <motion.div
            animate={{ color: themeSelector.headerColor, fontWeight: "700" }}
            className="comment-date"
          >
            {data.date}
          </motion.div>
          <motion.span
            animate={{ color: themeSelector.plainTextColor }}
            className="email"
          >
            {data.email}
          </motion.span>
        </div>
      </div>
      <motion.div
        animate={{ color: themeSelector.plainTextColor }}
        className="comment-user-text"
      >
        {data.comment}
      </motion.div>
      <div className="bottom-comment-side">
        <div className="comment-actions">
          <span className="comment-like">
            <img src={like} alt="like" />
            {data.liked}
          </span>
          <span className="comment-dislike">
            <img src={dislike} alt="dislike" />
            {data.disliked}
          </span>
          <span>
            <img src={data.saved ? filled_saved : save} alt="save" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CommentPost;
