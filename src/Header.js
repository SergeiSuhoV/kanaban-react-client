import React from "react";
import "./Header.scss";
import Logo from "./Logo";
import TeamOnline from "./TeamOnline";
import Avatar from "./Avatar";
import Settings from "./Settings";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        {/* Logo */}
        <Logo />
      </div>
      <div className="header__wrapper">
        {/* TeamOnline */}
        <TeamOnline />
        {/* Avatar */}
        <Avatar name="SS"/>
        {/* Settings */}
        <Settings />
      </div>
    </div>
  );
}

export default Header;
