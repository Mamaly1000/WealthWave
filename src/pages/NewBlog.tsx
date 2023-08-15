import { FormEvent, useEffect, useRef, useState } from "react";
import CreateableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { NoteFormProps, TAG } from "../types/noteTypes";
import { AnimatePresence, motion } from "framer-motion";
import { modalMotion, removingPageMotion } from "../motions/motions";
import urlValidation from "../utils/imageChecker";
import tickImg from "./../assets/blogs/click.svg";
import Loader from "../components/loader/Loader";
import imgPreview from "./../assets/blogs/pewview.svg";
import { toast } from "react-toastify";
import Header from "../components/header-component/Header";
const NewBlog = ({ onSubmit, onAddTag, AllAvailableTags }: NoteFormProps) => {
  const [imgLoading, setImgLoading] = useState<boolean>(false);
  const [imageSRC, setImageSRC] = useState<string>("");
  const [preview, setImagePreview] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [imageSRCurl, setImageSRCurl] = useState<string>("");
  const [selectedTags, setselectedTags] = useState<TAG[]>([]);
  const nav = useNavigate();
  const submitHnadler = (e: FormEvent) => {
    e.preventDefault();

    if (titleRef.current!.value.length === 0) {
      toast.warn("title input can not be empty!");
    } else if (emailRef.current!.value.length === 0) {
      toast.warn("email input can not be empty!");
    } else if (imageSRCurl.length === 0) {
      toast.warn("image input can not be empty!");
    } else if (imageSRC.length === 0) {
      toast.warn("please submit your blog picture");
    } else if (textAreaRef.current!.value.length === 0) {
      toast.warn("blog description can not be empty!");
    } else {
      onSubmit({
        title: titleRef.current!.value,
        email: emailRef.current!.value,
        body: textAreaRef.current!.value,
        img: imageSRCurl,
        tags: selectedTags,
        id: uuidV4(),
        published_date: new Date(),
      });
      nav(-1);
    }
  };
  useEffect(() => {
    if (imageSRCurl.length === 0) {
      setImageSRC("");
    }
  }, [imageSRCurl, imageSRC]);

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="create-blog-page"
    >
      <Header
        btnText=""
        header={false}
        height={5}
        onclick={() => {}}
        text="new Blog"
        width={250}
      />
      <form className="create-blog-form" onSubmit={submitHnadler}>
        <div className="blog-detail-container">
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
            type="text"
            name="floating_title"
            id="floating_title"
            placeholder="title"
            ref={titleRef}
          />
          <motion.input
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.63, duration: 0.5, type: "tween" }}
            type="email"
            placeholder="email"
            name="floating_email"
            id="floating_email"
            ref={emailRef}
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "tween" }}
            className="blog-image-container"
          >
            <input
              type="text"
              name="floating_title"
              id="floating_title"
              placeholder="image url"
              value={imageSRCurl}
              onChange={(e) => setImageSRCurl(e.target.value)}
            />
            <AnimatePresence>
              {!imgLoading && imageSRC.length === 0 && (
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                  }}
                  src={tickImg}
                  alt="tick"
                  className="tick-img"
                  onClick={() => {
                    if (imageSRCurl.length !== 0) {
                      urlValidation(imageSRCurl, setImgLoading, setImageSRC);
                    } else {
                      toast.error("input is empty");
                    }
                  }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>{imgLoading && <Loader />}</AnimatePresence>
            <AnimatePresence>
              {imageSRC.length > 0 && imageSRCurl.length !== 0 && (
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                  }}
                  src={imgPreview}
                  alt="image preview"
                  className="preview-img"
                  onClick={() => {
                    setImagePreview(true);
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>
          {preview && (
            <motion.div
              variants={modalMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="modal-content"
              style={{ position: "relative", bottom: 60 }}
            >
              <div className="modal-header">
                <h4>Image Preview</h4>
              </div>
              <img src={imageSRC} alt="image preview" />
            </motion.div>
          )}
        </div>
        <div className="blog-desc-container">
          <CreateableReactSelect
            className="form-select"
            isMulti
            id="countries"
            value={selectedTags.map((t) => {
              return {
                label: t.label,
                value: t.id,
              };
            })}
            onChange={(selectedTags) => {
              setselectedTags(
                selectedTags.map((t) => {
                  return {
                    id: t.value,
                    label: t.label,
                  };
                })
              );
            }}
            onCreateOption={(label) => {
              const newTag = {
                id: uuidV4(),
                label,
              };
              onAddTag(newTag);
              setselectedTags((prev) => [...prev, newTag]);
            }}
            options={AllAvailableTags.map((tag) => {
              return {
                label: tag.label,
                value: tag.id,
              };
            })}
          />
          <motion.textarea
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "tween" }}
            id="message"
            placeholder="your blog description"
            ref={textAreaRef}
          ></motion.textarea>
        </div>
        <div className="form-action-group">
          <button type="submit" className="form-submit-btn">
            Submit
          </button>
          <Link to="/myBlogs">
            <button type="button" className="form-cancel-btn">
              cancel
            </button>
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default NewBlog;
