import { Link } from "react-router-dom";
import { Footer_Links } from "../Data/dummy";
import Divider from "../components/ntf-components/Divider";
const Footer = () => {
  return (
    <div className="footer-container">
      {Footer_Links.map((section, index) => {
        return (
          <section key={index}>
            <span className="footer-headers">
              {section.header}
              <Divider height={5} width={250} />
            </span>
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
        Copyright © {new Date().getFullYear()} by{" "}
        <a href="https://github.com/Mamaly1000" target="_blank">
          mamaly1000
        </a>
      </div>
    </div>
  );
};

export default Footer;
