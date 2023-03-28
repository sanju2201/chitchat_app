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
          {Users.map((user) => (
            <Friends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
