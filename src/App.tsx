import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NewBlog from "./pages/NewBlog";
import { useContextFunction } from "./context/AppContext";
import BlogPage from "./pages/BlogPage";
import BlogViewPage from "./pages/BlogViewPage";
import EditBlog from "./pages/EditBlog";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
function App() {
  const contextData = useContextFunction();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to={"/"} />} />

        <Route path="/crypto" element={"crypto main page"} />
        <Route path="/crypto/:id" element={"crypto info"} />

        <Route
          path="/myBlogs"
          element={
            <BlogPage
              AllAvailableTags={contextData!.tags}
              notes={contextData!.notesWithTags}
            />
          }
        />
        <Route
          path="/myBlogs/:id"
          element={
            <BlogViewPage
              notes={contextData!.notesWithTags}
              onDelete={contextData!.onDelete}
            />
          }
        />
        <Route
          path="/myBlogs/new"
          element={
            <NewBlog
              onSubmit={contextData!.onCreateNote}
              onAddTag={contextData!.onAddTag}
              AllAvailableTags={contextData!.tags}
            />
          }
        />
        <Route
          path="/myBlogs/:id/editBlog"
          element={
            <EditBlog
              onSubmit={contextData!.onUpdate}
              onAddTag={contextData!.onAddTag}
              AllAvailableTags={contextData!.tags}
              notes={contextData!.notesWithTags}
            />
          }
        />

        <Route path="/news" element={"news main page"} />
        <Route path="/news/:id" element={"news single page"} />
      </Routes>
    </Layout>
  );
}

export default App;
