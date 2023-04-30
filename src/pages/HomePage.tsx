import React from "react";
import VerticalSlider from "../components/VerticalSlider";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";
import { CryptoTable } from "../components/cryto-table/CryptoChart";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";

const HomePage = () => {
  return (
    <div className="HomePage-container">
      {/* <VerticalSlider /> */}
      <div className="HomePage-intro-section">
        <HomePageIntro />
        <CubeSlider />
      </div>
      <div>
        <CryptoTableRow />
        <CryptoTable />
      </div>
    </div>
  );
};

export default HomePage;
