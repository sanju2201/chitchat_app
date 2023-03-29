import React from "react";
import RightbarHome from "../rightbarhome/RightbarHome";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <RightbarHome />
      </div>
    </div>
  );
};

export default Rightbar;
