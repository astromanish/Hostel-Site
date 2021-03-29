import React from "react";

import "./../css/discussion-forum.css";

import AskQuestion from "../DiscussionForum/ask-question";
import QuestionList from "../DiscussionForum/questions-list";

const DiscussionForum = () => {
  return (
    <div className="body-container">
      <AskQuestion />
      <QuestionList />
    </div>
  );
};

export default DiscussionForum;
