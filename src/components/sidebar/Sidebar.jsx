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
import friend1 from "../../assets/images/person/friend1.jpg";
import friend2 from "../../assets/images//person/friend2.jpg";
import friend3 from "../../assets/images/person/friend3.jpg";
import friend4 from "../../assets/images/person/friend4.jpg";
import friend5 from "../../assets/images/person/friend5.jpg";
import Friends from "../friends/Friends";
import { Users } from "../../assets/data/data";
console.log(Users);

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
          {}
          <Friends friend={friend1} name="Samuel Moses" />
          <Friends friend={friend2} name="Suzen" />
          <Friends friend={friend3} name="Molisa" />
          <Friends friend={friend4} name="Alfred" />
          <Friends friend={friend5} name="Shine jhon" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
