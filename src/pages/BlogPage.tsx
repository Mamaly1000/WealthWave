import React, { useState, useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import ReactSelect from "react-select";
import { BlogListProps, TAG } from "../types/noteTypes";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import EditTagModal from "../components/EditTagModal";

const BlogPage = ({ AllAvailableTags, notes }: BlogListProps) => {
  const nav = useNavigate();
  const [selectedTags, setselectedTags] = useState<TAG[]>([]);
  const [title, setTitle] = useState<string>("");
  const [showTagModal, setShowTagsModal] = useState<boolean>(false);
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === "" ||
          (note.title.toLowerCase().includes(title.toLowerCase()) &&
            selectedTags.length === 0)) &&
        selectedTags.every((tag) =>
          note.tags.some((noteTag) => noteTag.id === tag.id)
        )
      );
    });
  }, [title, selectedTags, notes]);
  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h1 className="page-header">My Blogs</h1>
        <button className="create-blog-btn" onClick={() => nav("/myBlogs/new")}>
          Create
        </button>
        <button
          className="edit-tags-btn"
          onClick={() => {
            setShowTagsModal(true);
          }}
        >
          Edit Tags
        </button>
      </div>
      <form className="create-blog-form">
        <div className="form-layout-md">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="countries" className="form-label">
              selectedTags
            </label>
            <ReactSelect
              className="form-select"
              isMulti
              id="countries"
              value={selectedTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              options={AllAvailableTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setselectedTags(
                  tags.map((tag) => {
                    return { label: tag.label, id: tag.value };
                  })
                );
              }}
            />
          </div>
        </div>
      </form>
      <div className="blog-list-cards">
        {filteredNotes.length > 0 &&
          filteredNotes.map((note) => {
            return (
              <BlogCard
                title={note!.title}
                tags={note!.tags}
                id={note!.id}
                email={note!.email}
                key={note!.id}
              />
            );
          })}
      </div>
      {showTagModal && (
        <EditTagModal
          show={showTagModal}
          setShow={setShowTagsModal}
          tags={AllAvailableTags}
        />
      )}
    </div>
  );
};

export default BlogPage;
