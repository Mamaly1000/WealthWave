import { Link } from "react-router-dom";
import { SideBar_links } from "../../Data/dummy";
import { useState } from "react";
import { useContextFunction } from "../../context/AppContext";

const SideBar = ({ setShowSideBar }) => {
  const [hide, setHide] = useState<boolean>(false);
  const contextData = useContextFunction();
  const hidingElement = () => {
    setHide(true);
    setTimeout(() => {
      setHide(false);
      setShowSideBar(false);
    }, 500);
  };
  return (
    <div style={{ zIndex: 400 }} className="sideBar-container">
      <div
        className="sideBar-overlay"
        onClick={() => hidingElement()}
        style={{ opacity: hide ? "0" : "1" }}
      ></div>
      <div
        className="sideBar-content"
        style={{
          transform: hide ? "translateX(-40vw)" : "translateX(0vw)",
          opacity: hide ? 0 : 1,
        }}
      >
        <div className="sideBar-header">
          <div>
            <span>W</span>ealth<span>W</span>ave
          </div>
          {!contextData!.screenW && (
            <button onClick={() => hidingElement()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="sideBar-profile-section">
          <img
            src="https://avatars.githubusercontent.com/u/105161078?v=4"
            alt=""
          />
          <h5>Mamaly100</h5>
          <p>mamadmehdi.aziz.10@gmail.com</p>
        </div>
        <div className="sideBar-hamMenu">
          {SideBar_links.map((link, index) => {
            return (
              <Link to={link.route} key={index} className="sideBar-ham-links">
                <img src={link.icon} alt={link.title} />
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="copyRight-section">
          Copyright © 2023 By <span>Mamaly1000</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
