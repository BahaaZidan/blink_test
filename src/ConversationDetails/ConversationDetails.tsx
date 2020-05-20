import "./ConversationDetails.css";

import realFacePicture from "../assets/real_face.png";
import groupIcon from "../assets/icons/ico_group.png";
import filterIcon from "../assets/icons/ico_filter.png";
import searchIcon from "../assets/icons/ico_search.png";
import plusIcon from "../assets/icons/invalid_name.png";
import sendIcon from "../assets/icons/send.png";
import clockIcon from "../assets/icons/clock.png";
import infoIcon from "../assets/icons/notes_26.png";
import checkIcon from "../assets/icons/check_light.png";

import React from "react";

import sampleData from "./sampleData";

const Message = (props: { messageInfo: MessageInfo }) => (
  <div className={`Message${props.messageInfo.isMe ? " fromMe" : ""}`}>
    <img className="Message__picture" src={realFacePicture} alt="profile" />
    <div
      className={`Message__message${props.messageInfo.isMe ? " fromMe" : ""}`}
    >
      {props.messageInfo.type === "task" ? (
        <div className="Message__message__task">
          <div className="Message__message__task__member task__title">
            {props.messageInfo.title}
          </div>
          <div className="Message__message__task__member task__date">
            <img className="task__icon" src={clockIcon} alt="clock" />
            <span>
              <span>{props.messageInfo.date}</span>
              <br />
              <span className="task__date__freq">
                {props.messageInfo.taskFrequency}
              </span>
            </span>
          </div>
          <div className="Message__message__task__member">
            <img className="task__icon" src={infoIcon} alt="notes" />
            {props.messageInfo.taskDescrription}
          </div>
          <div className="Message__message__task__member task__status">
            <img src={checkIcon} alt="check" />
            {props.messageInfo.taskStatus}
          </div>
        </div>
      ) : (
        props.messageInfo.message
      )}
    </div>
    <span className="Message__sender">{props.messageInfo.sender}</span>
    <span className="Message__timestamp">{props.messageInfo.timestamp}</span>
  </div>
);

const ConversationDetails = (props: { wrapperClassName: string }) => {
  return (
    <div className={`${props.wrapperClassName} ConversationDetails`}>
      <div className="ConversationDetails__header">
        <span>Mom’s Discharge Plan</span>
        <img src={groupIcon} alt="group" />
        <img src={filterIcon} alt="filter" />
        <img src={searchIcon} alt="search" />
      </div>
      <div className="ConversationDetails__content">
        {sampleData.reverse().map((message, idx) => (
          <Message key={idx} messageInfo={message as MessageInfo} />
        ))}
      </div>
      <div className="ConversationDetails__footer">
        <div className="ConversationDetails__footer__addIcon">
          <img src={plusIcon} alt="add" />
        </div>
        <input
          type="text"
          placeholder="message"
          className="ConversationDetails__footer__input"
        />
        <img
          src={sendIcon}
          alt="send"
          className="ConversationDetails__footer__sendIcon"
        />
      </div>
    </div>
  );
};

export default ConversationDetails;

type MessageInfo = {
  type: "plain" | "task";
  sender: string;
  timestamp: string;
  isMe: boolean;
  message?: string;
  title?: string;
  date?: string;
  eventMeta?: string;
  taskFrequency?: string;
  taskDescrription?: string;
  taskStatus?: string;
};
