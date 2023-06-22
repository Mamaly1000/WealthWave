import like from "../../assets/comments/like.svg";
import save from "../../assets/comments/save.svg";
import filled_saved from "../../assets/comments/flled-saved.svg";
import dislike from "../../assets/comments/dislike.svg";
import { CommentType } from "../../types/noteTypes";
type commentPostType = {
  data: CommentType;
};
const CommentPost = ({ data }: commentPostType) => {
  return (
    <div className="comment">
      <div className="comment-user-data">
        <div className="comment-user-image">
          <img src={data.profilePicUrl} alt="" />
        </div>
        <div className="comment-user-name">
          <span className="name">{data.name}</span>
          <div className="comment-date">{data.date}</div>
          <span className="email">{data.email}</span>
        </div>
      </div>
      <div className="comment-user-text">{data.comment}</div>
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
    </div>
  );
};

export default CommentPost;
