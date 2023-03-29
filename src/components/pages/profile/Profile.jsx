import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./profile.scss";
import ProfileCover from "../../../assets/images/profilebackground/back1.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <Navbar />
      <div className="profileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={ProfileCover} alt="" className="profileCoverImg" />
            </div>
          </div>
          <div className="profileRightBottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
