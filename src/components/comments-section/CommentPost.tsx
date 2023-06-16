import like from "../../assets/comments/like.svg";
import save from "../../assets/comments/save.svg";
import dislike from "../../assets/comments/dislike.svg";

const CommentPost = () => {
  return (
    <div className="comment">
      <div className="comment-user-data">
        <div className="comment-user-image">
          <img
            src="https://avatars.githubusercontent.com/u/105161078?v=4"
            alt=""
          />
        </div>
        <div className="comment-user-name">
          <span className="name">mohammad mehdi azizi</span>
          <span className="email">mamadmehdi.aziz.10@gmail.com</span>
        </div>
      </div>
      <div className="comment-user-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae,
        labore doloribus, mollitia sequi ut cupiditate quo deleniti voluptatibus
        cum sed. Dignissimos, quidem autem perspiciatis officiis sequi quisquam.
        Dolor, nam?
      </div>
      <div className="comment-actions">
        <img src={like} alt="like" />
        <img src={dislike} alt="dislike" />
        <img src={save} alt="save" />
      </div>
    </div>
  );
};

export default CommentPost;
