import { useNavigate, useParams } from "react-router-dom";
import { BlogViewPageProps } from "../types/noteTypes";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const BlogViewPage = ({ notes, onDelete }: BlogViewPageProps) => {
  const nav = useNavigate();
  const { id } = useParams();
  const blog = notes.find((note) => {
    return note.id === id;
  });
  if (blog === null) {
    nav("/myBlogs");
  }

  return (
    <div className="blogView-page">
      <div className="blogPage-header">
        <div>
          <h1>{blog?.title}</h1>
          <div>
            {blog?.tags.map((t) => {
              return (
                <span className="tag-badge" key={t.id}>
                  {t.label}
                </span>
              );
            })}
          </div>
        </div>
        <div className="blogPage-controls">
          <button
            onClick={() => nav(`/myBlogs/${blog?.id}/editBlog`)}
            className="edit-blog-btn"
          >
            Edit
          </button>
          <button
            className="delete-blog-btn"
            onClick={() => {
              onDelete(blog!.id);
              nav(-1);
            }}
          >
            Delete
          </button>
          <button className="back-btn" onClick={() => nav(-1)}>
            Back
          </button>
        </div>
      </div>
      <div className="blogpage-body">{blog?.body}</div>
    </div>
  );
};

export default BlogViewPage;
