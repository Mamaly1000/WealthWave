import { useState, useMemo } from "react";
import ReactSelect from "react-select";
import { BlogListProps, TAG } from "../types/noteTypes";
import BlogCard from "../components/blog-car-component/BlogCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { useContextFunction } from "../context/AppContext";
import Header from "../components/header-component/Header";
const BlogPage = ({ AllAvailableTags, notes }: BlogListProps) => {
  const nav = useNavigate();
  const [selectedTags, setselectedTags] = useState<TAG[]>([]);
  const [title, setTitle] = useState<string>("");
  const contextData = useContextFunction();
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
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="blog-list-container"
    >
      <div className="blog-list-header">
        <Header
          btnText=""
          header={false}
          height={5}
          onclick={() => {}}
          text="My Blogs"
          width={250}
        />
        <div>
          <button
            className="create-blog-btn"
            onClick={() => nav("/myBlogs/new")}
          >
            Create
          </button>
          <button
            className="edit-tags-btn"
            onClick={() => {
              contextData!.setShowTagsModal(true);
            }}
          >
            Edit Tags
          </button>
        </div>
      </div>
      <form className="create-blog-form">
        <input
          type="text"
          name="floating_title"
          id="floating_title"
          placeholder="Search ..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

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
      </form>
      <div className="blog-list-cards">
        {filteredNotes.length > 0 &&
          filteredNotes.map((note, index) => {
            return (
              <BlogCard
                title={note!.title}
                tags={note!.tags}
                id={note!.id}
                email={note!.email}
                key={note!.id}
                index={index}
                published_date={note!.published_date}
              />
            );
          })}
      </div>
    </motion.div>
  );
};

export default BlogPage;
