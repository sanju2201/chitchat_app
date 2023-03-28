import React from "react";
import "./share.scss";
import profile from "../../assets/images/other/profile.jpg";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={profile} alt="" className="shareProfileImg" />
          <input
            type={"text"}
            placeholder="whats is in your mind"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <VideoCameraFrontIcon
                className="shareIcon"
                style={{ color: "#bb0000f2" }}
              />
              <span className="shareOptionText">Live Video</span>
            </div>
            <div className="shareOption">
              <PermMediaIcon
                className="shareIcon"
                style={{ color: "#2e0196f1" }}
              />
              <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon
                className="shareIcon"
                style={{ color: "#bfc600ec" }}
              />
              <span className="shareOptionText">Feelings/Activity</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
