import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NewBlog from "./pages/NewBlog";
import { useContextFunction } from "./context/AppContext";
import BlogPage from "./pages/BlogPage";
import BlogViewPage from "./pages/BlogViewPage";
import EditBlog from "./pages/EditBlog";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crypto_page from "./pages/Crypto_page";
import View_Crypto from "./pages/View_Crypto";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ScrollToTop from "./components/scroll-component/ScrollToTop";
import Nft_Page from "./pages/Nft_Page";
function App() {
  const location = useLocation();
  const contextData = useContextFunction();
  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <QueryClientProvider client={new QueryClient()}>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to={"/"} />} />

            <Route path="/crypto" element={<Crypto_page />} />
            <Route path="/crypto/:id" element={<View_Crypto />} />

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

            <Route path="/nfts" element={<Nft_Page />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </AnimatePresence>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        draggableDirection="x"
        draggablePercent={20}
        theme="dark"
      />
    </Layout>
  );
}

export default App;
