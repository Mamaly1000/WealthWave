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
import ScrollToTop from "./components/scroll-component/ScrollToTop";
import Nft_Page from "./pages/Nft_Page";
import Nft_Single_Page from "./pages/Nft_Single_Page";
import NewsPage from "./pages/NewsPage";
import Dashboard from "./pages/Dashboard";
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

            <Route path="/news" element={<NewsPage />} />

            <Route path="/nfts" element={<Nft_Page />} />
            <Route path="/nfts/:id" element={<Nft_Single_Page />} />

            <Route path="/dashboard" element={<Dashboard />} />
          </Routes> 
        </QueryClientProvider>
      </AnimatePresence>
      <ToastContainer
        position={contextData!.localToast.position}
        autoClose={contextData!.localToast.autoClose}
        hideProgressBar={contextData!.localToast.hideProgressBar}
        newestOnTop={contextData!.localToast.newestOnTop}
        closeOnClick={contextData!.localToast.closeOnClick}
        rtl={contextData!.localToast.rtl}
        pauseOnFocusLoss={contextData!.localToast.pauseOnFocusLoss}
        draggable={contextData!.localToast.draggable}
        pauseOnHover={contextData!.localToast.pauseOnHover}
        draggableDirection={contextData!.localToast.draggableDirection}
        draggablePercent={contextData!.localToast.draggablePercent}
        theme={contextData!.localToast.theme}
      />
    </Layout>
  );
}

export default App;
