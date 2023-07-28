import { Link, NavLink } from "react-router-dom";
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
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<HomeIcon />} text="Home"></MenuItem>
        </NavLink>

        <NavLink
          to={"/profile/userId"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<AccountCircleIcon />} text="Profile"></MenuItem>
        </NavLink>

        <NavLink
          to="/reels"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<DynamicFeedIcon />} text="Reels"></MenuItem>
        </NavLink>

        <NavLink
          to="/watch"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<VideocamIcon />} text="Watch"></MenuItem>
        </NavLink>

        <NavLink
          to="/friends"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<Diversity3Icon />} text="Friends" />
        </NavLink>

        {/* <NavLink
          to="/bookmarks"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<BookmarkIcon />} text="Bookmarks" />
        </NavLink> */}

        {/* <NavLink
          to="/marketplace"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<StorefrontIcon />} text="Marketplace" />
        </NavLink> */}

        {/* <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<EventIcon />} text="Events" />
        </NavLink> */}

        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <MenuItem
            Icon={darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            text={darkMode ? "Light" : "Dark"}
          />
        </span>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MenuItem Icon={<ExitToAppIcon />} text="Logout" />
        </NavLink>

        {/* <MenuItem Icon={<ChatIcon />} text="Chats" /> */}
        {/* <button className="sidebarButton">Show More</button> */}
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
