import { FormEvent, useEffect, useRef, useState } from "react";
import CreateableReactSelect from "react-select/creatable";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { EditNoteFormProps, TAG } from "../types/noteTypes";
import { motion, AnimatePresence } from "framer-motion";
import imgPreview from "./../assets/blogs/pewview.svg";
import { modalMotion, removingPageMotion } from "../motions/motions";
import { toast } from "react-toastify";
import tickImg from "./../assets/blogs/click.svg";
import urlValidation from "../utils/imageChecker";
import Loader from "../components/loader/Loader";
import Header from "../components/header-component/Header";
import { useSelector } from "react-redux";
import { selecttheme } from "../features/theme_slice/theme_slice";
const EditBlog = ({
  notes,
  onSubmit,
  onAddTag,
  AllAvailableTags,
}: EditNoteFormProps) => {
  const { id } = useParams();
  const blog = notes.find((note) => note.id === id);
  const [imageSRCurl, setImageSRCurl] = useState<string>("");
  const [imgLoading, setImgLoading] = useState<boolean>(false);
  const [imageSRC, setImageSRC] = useState<string>("");
  const [preview, setImagePreview] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const themeSelector = useSelector(selecttheme);
  const [selectedTags, setselectedTags] = useState<TAG[]>(blog!.tags);
  const nav = useNavigate();
  const submitHnadler = (e: FormEvent) => {
    e.preventDefault();

    if (titleRef.current!.value.length === 0) {
      toast.warn("title input can not be empty!");
    } else if (emailRef.current!.value.length === 0) {
      toast.warn("email input can not be empty!");
    } else if (imageRef.current!.value.length === 0) {
      toast.warn("image input can not be empty!");
    } else if (imageSRC.length === 0) {
      toast.warn("please submit your blog picture");
    } else if (textAreaRef.current!.value.length === 0) {
      toast.warn("blog description can not be empty!");
    } else {
      onSubmit(blog!.id, {
        title: titleRef.current!.value,
        email: emailRef.current!.value,
        body: textAreaRef.current!.value,
        img: imageRef.current!.value,
        tags: selectedTags,
        published_date: new Date(),
      });
      nav(-1);
    }
  };
  useEffect(() => {
    setImageSRCurl(blog!.img);
  }, []);

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
        text="Edit Blog"
        width={250}
      />
      <form className="create-blog-form" onSubmit={submitHnadler}>
        <div className="blog-detail-container">
          <motion.input
            style={{ border: `1px solid ${themeSelector.btnColor}` }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "tween" }}
            type="text"
            name="floating_title"
            id="floating_title"
            placeholder="title"
            ref={titleRef}
            defaultValue={blog?.title}
          />
          <motion.input
            style={{ border: `1px solid ${themeSelector.btnColor}` }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.63, duration: 0.5, type: "tween" }}
            type="email"
            placeholder="email"
            name="floating_email"
            id="floating_email"
            ref={emailRef}
            defaultValue={blog?.email}
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: "tween" }}
            className="blog-image-container"
          >
            <input
              style={{ border: `1px solid ${themeSelector.btnColor}` }}
              type="text"
              name="floating_title"
              id="floating_title"
              placeholder="image url"
              ref={imageRef}
              defaultValue={imageSRCurl}
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
                    if (imageRef.current!.value.length !== 0) {
                      urlValidation(
                        imageRef.current!.value,
                        setImgLoading,
                        setImageSRC
                      );
                    } else {
                      toast.error("input is empty");
                    }
                  }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>{imgLoading && <Loader />}</AnimatePresence>
            <AnimatePresence>
              {imageSRC.length > 0 && imageRef.current!.value.length !== 0 && (
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
            defaultValue={blog?.body}
            style={{ border: `1px solid ${themeSelector.btnColor}` }}
          ></motion.textarea>
        </div>
        <div className="form-action-group">
          <button
            style={{
              background: themeSelector.btnColor,
              color: themeSelector.plainTextColor,
            }}
            type="submit"
            className="form-submit-btn"
          >
            Submit
          </button>
          <button
            style={{
              background: themeSelector.hoverColor,
              color: themeSelector.plainTextColor,
            }}
            type="button"
            className="form-cancel-btn"
            onClick={() => nav(-1)}
          >
            cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EditBlog;
