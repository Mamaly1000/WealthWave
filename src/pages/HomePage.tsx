import { useEffect } from "react";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import { useNavigate } from "react-router-dom";
import useNFT from "../hooks/useNFT";
import NFTslider from "../components/ntf-components/NFTslider";
import useNews from "../hooks/useNews";
import NewsSection from "../components/news-post-component/NewsSection";

const HomePage = () => {
  const nav = useNavigate();
  return (
    <div className="HomePage-container">
      {/* <VerticalSlider /> */}
      <div className="HomePage-intro-section">
        <HomePageIntro />
        <CubeSlider />
      </div>
      <div className="crypto-table-container">
        <div>
          <h2 className="page-header">Crypto Currencies</h2>
          <button onClick={() => nav("/crypto")}>track more coins</button>
        </div>
        <CryptoTableRow />
      </div>
      <div className="nft-list-slider">
        <NFTslider />
      </div>
      <NewsSection />
    </div>
  );
};

export default HomePage;
