import React from "react";
import VerticalSlider from "../components/VerticalSlider";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import { CryptoTable } from "../components/cryto-table/CryptoChart";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default HomePage;
