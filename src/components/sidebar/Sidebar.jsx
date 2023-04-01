import { Link } from "react-router-dom";
import React, { useContext } from "react";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import Friends from "../friends/Friends";
import { Users } from "../../assets/data/data";
import { DarkModeContext } from "../../context/darkModeContext";
console.log(Users);

const Sidebar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Link
          to="/reels"
          style={{ textDecoration: "none", color: "none" }}
          className="reelsLink"
        >
          <MenuItem Icon={<DynamicFeedIcon />} text="Reels"></MenuItem>
        </Link>

        <MenuItem Icon={<ChatIcon />} text="Chats" />
        <MenuItem Icon={<VideocamIcon />} text="Watch" />
        <MenuItem Icon={<Diversity3Icon />} text="Friends" />
        <MenuItem Icon={<BookmarkIcon />} text="Bookmarks" />
        <MenuItem Icon={<StorefrontIcon />} text="Marketplace" />
        <MenuItem Icon={<EventIcon />} text="Events" />
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <MenuItem
            Icon={darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            text={darkMode ? "Light" : "Dark"}
          />
        </span>
        <MenuItem Icon={<ExitToAppIcon />} text="Logout" />
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <h4 style={{ marginBottom: "10px" }}>Friend List</h4>
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
