import CubeSlider from "../components/cubic-slider/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import NFTslider from "../components/ntf-components/NFTslider";
import NewsSection from "../components/news-post-component/NewsSection";
import AboutUs from "../components/about_us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import Comments from "../components/comments-section/Comments";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { FC } from "react";
import TrendCryptoComponent from "../components/cryto-table/TrendCryptoComponent";
const HomePage: FC<any> = () => {
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="HomePage-container"
    >
      {/* <VerticalSlider /> */}
      <motion.div className="HomePage-intro-section">
        <HomePageIntro />
        <CubeSlider />
      </motion.div>
      <TrendCryptoComponent header={true} />
      <NFTslider />
      <NewsSection />
      <AboutUs />
      <Comments />
      <ContactUs />
    </motion.div>
  );
};

export default HomePage;
