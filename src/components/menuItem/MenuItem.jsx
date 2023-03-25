import React from "react";
import "./menuItem.scss";

const MenuItem = ({ Icon, text }) => {
  return (
    <div className="menuItem">
      {Icon}
      <span className="menuItemText">{text}</span>
      <span className="menuItemTextName">{text === "Logout" && "(Sanju)"}</span>
    </div>
  );
};

export default MenuItem;
