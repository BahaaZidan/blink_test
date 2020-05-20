import "./ActionsSider.css";

import React from "react";

import cogIcon from "../assets/icons/cog.png";
import conversationIcon from "../assets/icons/ico_conversation_png.png";
import profileIcon from "../assets/icons/ico_profile_png.png";
import logoIcon from "../assets/icons/logo_outline.png";
import logoutIcon from "../assets/icons/logout.png";

const ActionsSider = (props: { wrapperClassName: string }) => {
  return (
    <div className={`${props.wrapperClassName} ActionsSider`}>
      <img src={logoIcon} alt="logo icon" className="siderIcon" />
      <img
        src={conversationIcon}
        alt="conversation icon"
        className="siderIcon conversationSiderIcon"
      />
      <img src={profileIcon} alt="profile icon" className="siderIcon" />
      <img src={cogIcon} alt="settings icon" className="siderIcon" />
      <img
        src={logoutIcon}
        alt="logout icon"
        className="siderIcon logoutSiderIcon"
      />
    </div>
  );
};

export default ActionsSider;
