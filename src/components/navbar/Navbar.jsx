import React from "react";
import "./navbar.scss";
import logo from "../../assets/images/chitchat/logo_t.png";
import user from "../../assets/images/other/profile.jpg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="name">chitChat</span>
        </div>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends post or video"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Home</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">10</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">2</span>
          </div>
        </div>
        <img src={user} alt="user profile" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
