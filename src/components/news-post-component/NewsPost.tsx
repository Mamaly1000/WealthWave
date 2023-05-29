import moment from "moment";
import React, { useEffect, useState } from "react";
import { IAppleNews } from "../../hooks/useNews";
import axios from "axios";
type NewsPostProps = {
  news: IAppleNews;
  id: number;
};
const NewsPost = ({ news, id }: NewsPostProps) => {
  const checkImg = async (img: string): Promise<unknown> => {
    try {
      const res = await axios.get(img);
      return res.data;
    } catch (error) {
      return "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1531411550/1531411506.jpg";
    }
  };
  const [doubleClicked, setDoubledClick] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const displayLikeIcon = () => {
    setDoubledClick(true);
    setLiked((prev) => !prev);
    setTimeout(() => {
      setDoubledClick(false);
    }, 500);
  };
  return (
    <div
      className="news-post-container"
      style={{ animationDelay: `${id / 10 + 0.1}s` }}
    >
      <img
        className="news-image"
        src={news!.urlToImage}
        alt={news!.title}
        onDoubleClick={() => displayLikeIcon()}
      />
      <div className="news-post-actions">
        <span className="news-date">
          {moment(news!.publishedAt).format("Y/MM/DD") +
            " - " +
            moment(news!.publishedAt).format("HH:MM")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
        </span>
        <div>
          <button
            className="action-btn"
            onClick={() =>
              navigator.share({
                title: news!.title,
                text: news!.content,
                url: news!.url,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </button>
          <button
            className="action-btn"
            onClick={() => setLiked((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={liked ? "red" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={liked ? "red" : "currentColor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="news-post-data">
        <h2 className="news-title">
          {news!.title.split(" ").slice(0, 6).join(" ") + " ..."}
        </h2>
        <div>
          <button
            className="news-read-more-btn"
            onClick={() => window.open(news!.url, "_blank")}
          >
            read more
          </button>
          <button
            className="news-save-btn"
            onClick={() => setSaved((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={saved ? "#ffffff" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={saved ? "#ffffff" : "currentColor"}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {doubleClicked && (
        <div className={`likedable-icon`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "rgba(255 0 0 /1)" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={liked ? "red" : "rgba(255 255 255/.6)"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default NewsPost;
