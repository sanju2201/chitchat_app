import React from "react";
import "./profileRightBar.scss";
import { Usersonline } from "../../assets/data/data";
import Following from "../following/Following";
import { Link } from "react-router-dom";
import { userVar } from "../pages/editProfile/EditProfile";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
        <Link to={"/profile/userId/edit"} style={{ textDecoration: "none" }}>
          <span className="editButton">Edit Profile</span>
        </Link>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Username: </span>
          <span className="profileRightBarItemValue" placeholder="SamJunior_22">
            {userVar.username === "" || null
              ? "SamJunior_22"
              : userVar.username}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Phone Number: </span>
          <span
            className="profileRightBarItemValue"
            placeholder="+91 8047274865"
          >
            {userVar.phone === "" ? "+91 8047274865" : userVar.phone}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Email: </span>
          <span
            className="profileRightBarItemValue"
            placeholder="+91 8047274865"
          >
            {userVar.email === "" ? "example@gmail.com" : userVar.email}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Address: </span>
          <span
            className="profileRightBarItemValue"
            placeholder="Newton School, Bangaluru"
          >
            {userVar.address === ""
              ? "Newton School, Bangaluru"
              : userVar.address}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Country: </span>
          <span className="profileRightBarItemValue" placeholder="India">
            {userVar.country === "" ? "India" : userVar.country}
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Relationship: </span>
          <span className="profileRightBarItemValue" placeholder="Single">
            {userVar.relation === "" ? "Single" : userVar.relation}
          </span>
        </div>
      </div>
      <h4 className="profileRightBarTitle"> Close Friends</h4>
      <div className="followings">
        {Usersonline.map((user) => (
          <Following key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProfileRightBar;
