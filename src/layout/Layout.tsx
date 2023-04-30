import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #000428, #004e92)",
        width: "100%",
        height: "100%",
        paddingInline: "50px",
      }}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
