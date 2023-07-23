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
import SelectedNewsPost from "../components/selectedNewsPost/selectedNewsPost";
import useCrypto from "../hooks/useCrypto";
const HomePage: FC<any> = () => {
  const {
    cryptoSelector: { coinlist },
  } = useCrypto();
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
      <CryptoTableRow crypto_data={coinlist} header={true} />
      <NFTslider />
      <NewsSection />
      <AboutUs />
      <Comments />
      <ContactUs />
    </motion.div>
  );
};

export default HomePage;
