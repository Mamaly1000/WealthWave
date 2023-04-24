import React, { FormEvent, useRef, useState } from "react";
import CreateableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { NoteFormProps, TAG } from "../types/noteTypes";

const NewBlog = ({ onSubmit, onAddTag, AllAvailableTags }: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [selectedTags, setselectedTags] = useState<TAG[]>([]);
  const nav = useNavigate();
  const submitHnadler = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      email: emailRef.current!.value,
      body: textAreaRef.current!.value,
      tags: selectedTags,
      id: uuidV4(),
    });
    nav(-1);
  };

  return (
    <div>
      <h1 className="page-header">new Blog</h1>

      <form className="create-blog-form" onSubmit={submitHnadler}>
        <div className="form-layout-md">
          <div className="form-layout-default">
            <div className="form-group">
              <label htmlFor="floating_title" className="form-label">
                title
              </label>
              <input
                type="text"
                name="floating_title"
                id="floating_title"
                className="form-input"
                placeholder=""
                required
                ref={titleRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="floating_email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="form-input"
                placeholder=" "
                required
                ref={emailRef}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="countries" className="form-label">
              selectedTags
            </label>
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
          </div>
        </div>
        <div className="form-layout-default">
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              body
            </label>
            <textarea
              id="message"
              className="form-textArea"
              placeholder="Leave a comment..."
              ref={textAreaRef}
            ></textarea>
          </div>
          <div className="form-action-group">
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
            <Link to="/">
              <button type="button" className="form-cancel-btn">
                cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
