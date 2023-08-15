import { useContextFunction } from "../../context/AppContext";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import closeIcon from "./../../assets/crypto/close.svg";
import likeIcon from "./../../assets/crypto/like.svg";
import shareIcon from "./../../assets/crypto/share.svg";
import saveIcon from "./../../assets/crypto/save.svg";
import dateIcon from "./../../assets/blogs/dateIcon.svg";
import moment from "moment";
import { useState } from "react";
const SelectedNewsPost = () => {
  const contextData = useContextFunction();
  const [displayContent, setDisplayContent] = useState<boolean>(false);
  const [displayContentChild, setDisplayContentChild] =
    useState<boolean>(false);
  return (
    <AnimatePresence mode="wait">
      {contextData!.selectedId && (
        <motion.div className="selected-post">
          {contextData!.selectedId && (
            <motion.div
              className="selected-post-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12, type: "tween", ease: "linear" }}
              onClick={() => {
                setDisplayContent(false);
                contextData!.setSelectedId(null);
              }}
              onAnimationComplete={() => {
                setDisplayContent(true);
              }}
            ></motion.div>
          )}
          {displayContent &&
            (contextData?.screenW ? (
              <motion.div
                className="selected-post-content"
                initial={{ opacity: 0, borderRadius: "0" }}
                animate={{ opacity: 1, borderRadius: "10px" }}
                exit={{
                  opacity: 0,
                  borderRadius: "10px",
                  transition: {
                    duration: 0.1,
                  },
                }}
                transition={{
                  duration: 0.1,
                  delay: 0.1,
                  type: "tween",
                  delayChildren: 1,
                  when: "beforeChidren",
                  staggerChildren: 1,
                }}
                drag="y"
                dragConstraints={{ top: -100 }}
                dragSnapToOrigin
                onAnimationComplete={() => {
                  setDisplayContentChild(true);
                }}
              >
                {displayContentChild && (
                  <div className="selected-post-image">
                    <button onClick={() => contextData!.setSelectedId(null)}>
                      <motion.img src={closeIcon} />
                    </button>
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1,
                        type: "tween",
                      }}
                      src={
                        contextData!.selectedId.urlToImage
                          ? contextData!.selectedId.urlToImage
                          : ""
                      }
                    />
                  </div>
                )}
                {displayContentChild && (
                  <div className="selected-post-context">
                    <motion.h2
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                      className="selected-post-title"
                    >
                      {contextData!.selectedId.title}
                    </motion.h2>
                    <motion.p
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                      className="selected-post-desc"
                    >
                      {contextData!.selectedId.description}
                      {contextData.selectedId.content}
                    </motion.p>
                    <div className="selected-post-actions">
                      <motion.button
                        onClick={() =>
                          window.open(
                            contextData!.selectedId!.url
                              ? contextData!.selectedId!.url
                              : "",
                            "_blank"
                          )
                        }
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          type: "spring",
                        }}
                      >
                        check out the news
                      </motion.button>
                      <motion.button
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.9,
                          type: "spring",
                        }}
                      >
                        <img src={likeIcon} />
                      </motion.button>
                      <motion.button
                        onClick={() =>
                          navigator.share({
                            title: contextData!.selectedId!.title
                              ? contextData!.selectedId!.title
                              : "",
                            text: contextData!.selectedId!.content
                              ? contextData!.selectedId!.content
                              : "",
                            url: contextData!.selectedId!.url
                              ? contextData!.selectedId!.url
                              : "",
                          })
                        }
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.1,
                          type: "spring",
                        }}
                      >
                        <img src={shareIcon} />
                      </motion.button>
                      <motion.button
                        onClick={() => {}}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2,
                          type: "spring",
                        }}
                      >
                        <img src={saveIcon} />
                      </motion.button>
                    </div>
                    <div className="selected-post-extra">
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 1.2,
                          type: "tween",
                        }}
                      >
                        {" "}
                        {moment(contextData!.selectedId!.publishedAt).format(
                          "Y/MM/DD"
                        ) +
                          " - " +
                          moment(contextData!.selectedId!.publishedAt).format(
                            "HH:MM"
                          )}
                        <img src={dateIcon} />
                      </motion.span>
                      {contextData!.selectedId!.source!.id &&
                        contextData!.selectedId!.source!.id.length > 0 && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.4,
                              type: "tween",
                            }}
                          >
                            {contextData!.selectedId!.source!.id}
                          </motion.span>
                        )}
                      {contextData!.selectedId?.source?.name &&
                        contextData!.selectedId?.source?.name.length > 0 && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.6,
                              type: "tween",
                            }}
                          >
                            {contextData.selectedId.source.name}
                          </motion.span>
                        )}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                className="selected-post-content"
                initial={{
                  y: 1000,
                  borderRadius: "0",
                }}
                animate={{ y: 300, borderRadius: "10px 10px 0 0" }}
                exit={{ y: 1000, borderRadius: "10px" }}
                transition={{
                  duration: 0.1,
                  delay: 0.1,
                  type: "tween",
                  ease: "linear",
                }}
                onAnimationComplete={() => {
                  setDisplayContentChild(true);
                }}
                drag="y"
                dragConstraints={{ top: 100, bottom: 0 }}
                dragElastic={0.8}
                onDragEnd={(_e, info: PanInfo) => {
                  if (info.offset.y > 200) {
                    contextData?.setSelectedId(null);
                  }
                }}
                dragSnapToOrigin
              >
                {displayContentChild && (
                  <div className="selected-post-image">
                    <button onClick={() => contextData!.setSelectedId(null)}>
                      <img src={closeIcon} />
                    </button>
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 1,
                        delay: 1,
                        type: "tween",
                      }}
                      src={
                        contextData!.selectedId.urlToImage
                          ? contextData!.selectedId.urlToImage
                          : ""
                      }
                    />
                  </div>
                )}
                {displayContentChild && (
                  <div className="selected-post-context">
                    <motion.h2
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                      className="selected-post-title"
                    >
                      {contextData!.selectedId.title}
                    </motion.h2>
                    <motion.p
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                      className="selected-post-desc"
                    >
                      {contextData!.selectedId.description}
                      {contextData!.selectedId.content}
                    </motion.p>
                    <div className="selected-post-actions">
                      <motion.button
                        onClick={() =>
                          window.open(
                            contextData!.selectedId!.url
                              ? contextData!.selectedId!.url
                              : "",
                            "_blank"
                          )
                        }
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          type: "spring",
                        }}
                      >
                        check out the news
                      </motion.button>
                      <motion.button
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.9,
                          type: "spring",
                        }}
                      >
                        <img src={likeIcon} />
                      </motion.button>
                      <motion.button
                        onClick={() =>
                          navigator.share({
                            title: contextData!.selectedId!.title
                              ? contextData!.selectedId!.title
                              : "",
                            text: contextData!.selectedId!.content
                              ? contextData!.selectedId!.content
                              : "",
                            url: contextData!.selectedId!.url
                              ? contextData!.selectedId!.url
                              : "",
                          })
                        }
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.1,
                          type: "spring",
                        }}
                      >
                        <img src={shareIcon} />
                      </motion.button>
                      <motion.button
                        onClick={() => {}}
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.2,
                          type: "spring",
                        }}
                      >
                        <img src={saveIcon} />
                      </motion.button>
                    </div>
                    <div className="selected-post-extra">
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 1.2,
                          type: "tween",
                        }}
                      >
                        {" "}
                        {moment(contextData!.selectedId!.publishedAt).format(
                          "Y/MM/DD"
                        ) +
                          " - " +
                          moment(contextData!.selectedId!.publishedAt).format(
                            "HH:MM"
                          )}
                        <img src={dateIcon} />
                      </motion.span>
                      {contextData!.selectedId!.source!.id &&
                        contextData!.selectedId!.source!.id.length > 0 && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.4,
                              type: "tween",
                            }}
                          >
                            {contextData!.selectedId!.source!.id}
                          </motion.span>
                        )}
                      {contextData!.selectedId.source.name &&
                        contextData!.selectedId.source.name.length > 0 && (
                          <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.2,
                              delay: 1.6,
                              type: "tween",
                            }}
                          >
                            {contextData!.selectedId.source.name}
                          </motion.span>
                        )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelectedNewsPost;
