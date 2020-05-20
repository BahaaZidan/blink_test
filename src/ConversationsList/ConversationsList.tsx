import "./ConversationsList.css";

import React from "react";

import newConversationIcon from "../assets/icons/new_conversation.png";
import profileIcon from "../assets/icons/ico_profile_png.png";
import sampleData from "./sampleData";

const Conversation = (props: {
  conversationInfo: ConversationInfo;
  selected: boolean;
}) => (
  <div
    className={`Conversation${props.selected ? " Conversation__selected" : ""}`}
  >
    <div className="Conversation__picture">
      <img src={profileIcon} alt="profile" />
    </div>
    <span className="Conversation__title">{props.conversationInfo.title}</span>
    <span className="Conversation__subTitle">
      {props.conversationInfo.subTitle}
    </span>
    <span className="Conversation__description">
      {props.conversationInfo.description}
    </span>
    <span className="Conversation__date">{props.conversationInfo.date}</span>
    <span className="Conversation__unreadCount">
      {props.conversationInfo.unreadCount}
    </span>
  </div>
);

const ConversationsList = (props: { wrapperClassName: string }) => {
  return (
    <div className={`${props.wrapperClassName} ConversationsList`}>
      <div className="ConversationsList__header">
        <span>Conversations</span>
        <img
          src={newConversationIcon}
          alt="conversation"
          className="ConversationsList__header__icon"
        />
      </div>
      <div className="ConversationsList__list">
        {sampleData.map((conversationInfo, idx) => (
          <Conversation
            key={idx}
            conversationInfo={conversationInfo}
            selected={idx === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationsList;

type ConversationInfo = {
  title: string;
  subTitle: string;
  description: string;
  date: string;
  unreadCount: number;
};
