import { FormEvent, useRef, useState } from "react";
import CreateableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { NoteFormProps, TAG } from "../types/noteTypes";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import ValidateAndDownloadImage from "../utils/imageChecker";
const NewBlog = ({ onSubmit, onAddTag, AllAvailableTags }: NoteFormProps) => {
  ValidateAndDownloadImage("www.google.com/image/asjfsdkfjsdfmk.jpg");
  ValidateAndDownloadImage(
    "https://blogs.nasa.gov/commercialcrew/wp-content/uploads/sites/230/2019/12/317188-33_CST_Flip_fr01_.jpg"
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const [selectedTags, setselectedTags] = useState<TAG[]>([]);
  const nav = useNavigate();
  const submitHnadler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      email: emailRef.current!.value,
      body: textAreaRef.current!.value,
      img: imageRef.current!.value,
      tags: selectedTags,
      id: uuidV4(),
    });
    nav(-1);
  };

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="create-blog-page"
    >
      <h1 className="page-header">new Blog</h1>

      <form className="create-blog-form" onSubmit={submitHnadler}>
        <div className="blog-detail-container">
          <input
            type="text"
            name="floating_title"
            id="floating_title"
            placeholder="title"
            required
            ref={titleRef}
          />
          <input
            type="email"
            placeholder="email"
            name="floating_email"
            id="floating_email"
            required
            ref={emailRef}
          />
          <input
            type="text"
            name="floating_title"
            id="floating_title"
            placeholder="image url"
            required
            ref={imageRef}
          />
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
          <textarea
            id="message"
            placeholder="your blog description"
            ref={textAreaRef}
          ></textarea>
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
