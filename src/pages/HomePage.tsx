import CubeSlider from "../components/cubic-slider/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import NFTslider from "../components/ntf-components/NFTslider";
import NewsSection from "../components/news-post-component/NewsSection";
import AboutUs from "../components/about_us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import Comments from "../components/comments-section/Comments";
import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { FC } from "react";
import globeSVG from "./../assets/globe.svg";
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
      <motion.div
        initial={{ transform: "translateY(-100px)" }}
        animate={{ transform: "translateY(0px)" }}
        className="HomePage-intro-section"
        style={{ backgroundImage: `url(${globeSVG})`,backgroundBlendMode:"darken" }}
      >
        <HomePageIntro />
        <CubeSlider />
      </motion.div>
      <CryptoTableRow />
      <NFTslider />
      <NewsSection />
      <AboutUs />
      <Comments />
      <ContactUs />
    </motion.div>
  );
};

export default HomePage;
