import React from "react";
import "./share.scss";
import profile from "../../assets/images/other/profile.jpg";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img src={profile} alt="" className="shareProfileImg" /> */}
          <input
            type={"text"}
            placeholder="whats is in your mind"
            className="shareInput"
          />
        </div>
        <div className="shareBottom">Bottom</div>
      </div>
    </div>
  );
};

export default Share;
