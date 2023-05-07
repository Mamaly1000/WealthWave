import React, { useEffect } from "react";
import VerticalSlider from "../components/VerticalSlider";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import { CryptoTable } from "../components/cryto-table/CryptoChart";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import { useNavigate } from "react-router-dom";
import useNFT from "../hooks/useNFT";

const HomePage = () => {
  const nav = useNavigate();
  const { getNftLst, getSingleNft } = useNFT();
  useEffect(() => {
    getNftLst(10);
    getSingleNft("squiggly");
  }, []);
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
      <div className="nft-list-slider"></div>
    </div>
  );
};

export default HomePage;
