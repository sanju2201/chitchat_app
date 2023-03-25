import React from "react";
import "./friends.scss";

const Friends = ({ friend, name }) => {
  return (
    <li className="friendItem">
      <img src={friend} alt="friend1" className="friendImg" />
      <span className="friendName">{name}</span>
    </li>
  );
};

export default Friends;
