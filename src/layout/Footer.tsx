import { Link } from "react-router-dom";
import { Footer_Links, contacts_links } from "../Data/dummy";
import Divider from "../components/ntf-components/Divider";
import { smallLogo } from "../assets/logo/logo";
import { useSelector } from "react-redux";
import { selecttheme } from "../features/theme_slice/theme_slice";
const Footer = () => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div className="footer-container">
      <div className="desc-container">
        <div>
          <img src={smallLogo} />{" "}
          <div
            className="logo-text"
            style={{ color: themeSelector.headerColor }}
          >
            <span style={{ color: themeSelector.btnColor }}>W</span>ealth
            <span style={{ color: themeSelector.btnColor }}>W</span>ave
          </div>
          <Divider height={3} width={150} />
        </div>
        <p style={{ color: themeSelector.plainTextColor }}>
          we foster a community of cryptocurrency enthusiasts through our forums
          and social media platforms
        </p>
        <div className="contacts">
          {contacts_links.map((link, index) => {
            return (
              <a
                style={{ background: themeSelector.btnColor }}
                href={link.route}
                target="_blank"
                key={index}
              >
                <img src={link.icon} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="links-container">
        {Footer_Links.map((section, index) => {
          return (
            <section key={index}>
              <span
                style={{ color: themeSelector.headerColor }}
                className="footer-headers"
              >
                {section.header}
                <Divider height={3} width={100} />
              </span>
              <div className="footer-section">
                {section.links.map((link, index) => {
                  return (
                    <Link
                      style={{
                        color: themeSelector.headerColor,
                        background: themeSelector.btnColor,
                      }}
                      to="/"
                      key={index}
                      className="links-btn"
                    >
                      {link}
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
      <div
        className="Copyright-section"
        style={{ color: themeSelector.plainTextColor }}
      >
        Copyright © {new Date().getFullYear()} by{" "}
        <a
          style={{ color: themeSelector.btnColor }}
          href="https://github.com/Mamaly1000"
          target="_blank"
        >
          mamaly1000
        </a>
      </div>
    </div>
  );
};

export default Footer;
