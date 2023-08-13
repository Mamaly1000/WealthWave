import moment from "moment";
import React, { useEffect, useState } from "react";
import { IAppleNews } from "../../hooks/useNews";
import { AnimatePresence, motion } from "framer-motion";
import { newsCardMotion } from "../../motions/motions.js";
import { PosturlValidation } from "../../utils/imageChecker.js";
import { randomPics } from "../../utils/randomPics.js";
import dateIcon from "./../../assets/blogs/dateIcon.svg";
type NewsPostProps = {
  news: IAppleNews;
  id: number;
  index: number;
  setSelectedId: React.Dispatch<React.SetStateAction<IAppleNews | null>>;
  selectedId: IAppleNews | null;
};
const NewsPost = ({
  news,
  index,
  setSelectedId, 
}: NewsPostProps) => {
  const [doubleClicked, setDoubledClick] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [postPicUrl, setPostPicUrl] = useState<string>(""); 
  const [displayPost, setDisplayPost] = useState<boolean>(true);
  const displayLikeIcon = () => {
    setDoubledClick(true);
    setLiked((prev) => !prev);
    setTimeout(() => {
      setDoubledClick(false);
    }, 500);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={newsCardMotion(index)}
        initial="hidden"
        whileInView="view"
        exit="exit"
        viewport={{ once: true }}
        className="news-post-container"
      >
        <div
          className={`news-post-image-container ${
            loading ? "loading-animation" : ""
          }`}
        >
          <img
            className="news-image"
            src={
              !loading
                ? postPicUrl
                : randomPics[Math.floor(Math.random() * randomPics.length)]
            }
            alt={news?.title || ""}
            onDoubleClick={() => displayLikeIcon()}
          />
        </div>
        <div className="news-post-actions">
          <span className="news-date">
            {moment(news!.publishedAt).format("Y/MM/DD") +
              " - " +
              moment(news!.publishedAt).format("HH:MM")}
            <img src={dateIcon} />
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
            <button
              className="action-btn"
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
        <div className="news-post-data">
          <h2 className="news-title">
            {news!.title.split(" ").slice(0, 6).join(" ") + " ..."}
          </h2>
          <div>
            <button
              className="news-read-more-btn"
              onClick={() =>
                setSelectedId({
                  author: news.author,
                  content: news.content,
                  description: news.description,
                  publishedAt: news.publishedAt,
                  source: news.source,
                  title: news.title,
                  url: news.url,
                  urlToImage: loading
                    ? randomPics[Math.floor(Math.random() * randomPics.length)]
                    : postPicUrl,
                })
              }
            >
              read more
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
      </motion.div>
    </AnimatePresence>
  );
};

export default NewsPost;
