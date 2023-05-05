import NavBar from "./NavBar";
import Footer from "./Footer";
import SideBar from "../components/sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000428, #004e92)",
        width: "100%",
        height: "100%",
      }}
    >
      <NavBar />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
