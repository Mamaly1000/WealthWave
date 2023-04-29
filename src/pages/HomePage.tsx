import React from "react";
import VerticalSlider from "../components/VerticalSlider";
import CubeSlider from "../components/CubeSlider";
import HomePageIntro from "../components/HomePageIntro";

const HomePage = () => {
  return (
    <div className="HomePage-container">
      {/* <VerticalSlider /> */}
      <div className="HomePage-intro-section">
        <HomePageIntro />
        <CubeSlider />
      </div>
    </div>
  );
};

export default HomePage;
