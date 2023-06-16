import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import NFTslider from "../components/ntf-components/NFTslider";
import NewsSection from "../components/news-post-component/NewsSection";
import AboutUs from "../components/about_us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import Comments from "../components/comments-section/Comments";

const HomePage = () => {
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
      <Comments />
      <ContactUs />
    </div>
  );
};

export default HomePage;
