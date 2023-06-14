import { useEffect } from "react";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import { useNavigate } from "react-router-dom";
import useNFT from "../hooks/useNFT";
import NFTslider from "../components/ntf-components/NFTslider";
import useNews from "../hooks/useNews";
import NewsSection from "../components/news-post-component/NewsSection";
import AboutUs from "../components/about_us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";

const HomePage = () => {
  const nav = useNavigate();
  return (
    <div className="HomePage-container">
      {/* <VerticalSlider /> */}
      <div className="HomePage-intro-section">
        <HomePageIntro />
        <CubeSlider />
      </div>
      <CryptoTableRow />
      <NFTslider />
      <NewsSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default HomePage;
