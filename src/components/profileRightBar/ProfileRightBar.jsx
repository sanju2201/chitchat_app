import React from "react";
import "./profileRightBar.scss";
import { Usersonline } from "../../assets/data/data";
import Following from "../following/Following";

const ProfileRightBar = () => {
  return (
    <div className="profileRightBar">
      <div className="profileRightBarHeading">
        <span className="profileRightBarTitle">User Information</span>
        <span className="editButton">Edit Profile</span>
      </div>

      <div className="profileRightBarInfo">
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Phone Number: </span>
          <span className="profileRightBarItemValue">+91 8047274865</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Address: </span>
          <span className="profileRightBarItemValue">
            Newton School, Bangaluru
          </span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Country: </span>
          <span className="profileRightBarItemValue">India</span>
        </div>
        <div className="profileRightBarInfoItem">
          <span className="profileRightBarItemKey">Relationship: </span>
          <span className="profileRightBarItemValue">Single</span>
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
