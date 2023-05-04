import { Link } from "react-router-dom";
import { Footer_Links } from "../dumbData/dummy";
const Footer = () => {
  return (
    <div className="footer-container">
      {Footer_Links.map((section, index) => {
        return (
          <section key={index}>
            <span className="footer-headers">{section.header}</span>
            <div className="footer-section">
              {section.links.map((link, index) => {
                return (
                  <Link to="/" key={index} className="links-btn">
                    {link}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
      <div className="Copyright-section">
        Copyright © {new Date().getFullYear()} by <span>mamaly1000</span>
      </div>
    </div>
  );
};

export default Footer;
