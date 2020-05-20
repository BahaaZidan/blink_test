import "./App.css";

import React from "react";

import ActionsSider from "./ActionsSider/ActionsSider";
import ConversationsList from "./ConversationsList/ConversationsList";
import ConversationDetails from "./ConversationDetails/ConversationDetails";

const App = () => {
  return (
    <div className="App">
      <ActionsSider wrapperClassName="actionsSider" />
      <ConversationsList wrapperClassName="conversationsList" />
      <ConversationDetails wrapperClassName="conversationDetails" />
    </div>
  );
};

export default App;
