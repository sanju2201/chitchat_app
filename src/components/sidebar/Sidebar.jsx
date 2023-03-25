import React from "react";
import "./sidebar.scss";
import MenuItem from "../menuItem/MenuItem";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EventIcon from "@mui/icons-material/Event";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import friend1 from "../../assets/images_sanju//person/friend1.jpg";
import friend2 from "../../assets/images_sanju//person/friend2.jpg";
import friend3 from "../../assets/images_sanju//person/friend3.jpg";
import friend4 from "../../assets/images_sanju//person/friend4.jpg";
import friend5 from "../../assets/images_sanju//person/friend5.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <MenuItem Icon={<DynamicFeedIcon />} text="Feed" />
        <MenuItem Icon={<ChatIcon />} text="Chats" />
        <MenuItem Icon={<VideocamIcon />} text="Watch" />
        <MenuItem Icon={<Diversity3Icon />} text="Friends" />
        <MenuItem Icon={<BookmarkIcon />} text="Bookmarks" />
        <MenuItem Icon={<StorefrontIcon />} text="Marketplace" />
        <MenuItem Icon={<EventIcon />} text="Events" />
        <MenuItem Icon={<DarkModeIcon />} text="Theme" />
        <MenuItem Icon={<ExitToAppIcon />} text="Logout" />
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src={friend1} alt="friend1" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sam Parker</span>
          </li>
          <li className="sidebarFriend">
            <img src={friend2} alt="friend2" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sam Parker</span>
          </li>
          <li className="sidebarFriend">
            <img src={friend3} alt="friend3" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sam Parker</span>
          </li>
          <li className="sidebarFriend">
            <img src={friend4} alt="friend4" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sam Parker</span>
          </li>
          <li className="sidebarFriend">
            <img src={friend5} alt="friend5" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Sam Parker</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
