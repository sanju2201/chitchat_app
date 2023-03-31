import React from "react";
import { reels } from "../../../assets/data/data";
import Navbar from "../../navbar/Navbar";
import "./reels.scss";
import Slider from "./Slider";

const Reels = () => {
  return (
    <div className="reels">
      <Navbar className="nav" />
      <Slider reels={reels} className="sliderInfo" />
    </div>
  );
};

export default Reels;
