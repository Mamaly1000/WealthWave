import { Link } from "react-router-dom";
import { SideBar_links } from "../../Data/dummy";

const SideBar = () => {
  return (
    <div style={{ zIndex: 400 }} className="sideBar-container">
      <div className="sideBar-overlay"></div>
      <div className="sideBar-content">
        <div className="sideBar-header">
          <span>W</span>ealth<span>W</span>ave
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
