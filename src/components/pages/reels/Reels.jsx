import React from "react";
import { reels } from "../../../assets/data/data";
import Navbar from "../../navbar/Navbar";
import "./reels.scss";
import Slider from "./Slider";

// Reels Component for Showing Reels to users
const Reels = () => {
  return (
    <div className="reels">
      <Navbar className="nav" />
      <Slider reels={reels} className="sliderInfo" />
    </div>
  );
};

export default Reels;
