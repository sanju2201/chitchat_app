import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./editProfile.scss";
import profileCover from "../../../assets/images/profilebackground/back4.jpg";
import profile from "../../../assets/images/person/friend6.jpg";
import editProfile from "../../../assets/images/other/DefaultProfile.jpg";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={profileCover} alt="" className="profileCoverImg" />
              <img src={profile} alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName"> Sam Junior</h4>
              <span className="profileInfoDes">Full Stack Developer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="top">
              <h1>Edit User Profile</h1>
            </div>
            <div className="bottom">
              <div className="left">
                <img src={editProfile} alt="" />
              </div>
              <div className="right">
                <form>
                  <div className="forInput">
                    <label htmlFor="file">
                      Image: <DriveFolderUploadOutlined className="icon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <div className="forInput">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" placeholder=" Sam Junior" />
                  </div>
                  <div className="forInput">
                    <label htmlFor="username">Username: </label>
                    <input
                      type="text"
                      id="username"
                      placeholder=" SamJunior_22"
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="email">Name: </label>
                    <input
                      type="email"
                      id="email"
                      placeholder=" example@gmail.com"
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="phone">Phone: </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder=" +91 8569452536"
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="address">Address: </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Newton School, Banguluru"
                    />
                  </div>
                  <div className="forInput">
                    <label htmlFor="country">Country: </label>
                    <input type="text" id="country" placeholder="India" />
                  </div>
                  <Link to={"/profile/userId"}>
                    <button type="submit" className="updateProfile">
                      Update Profile
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
