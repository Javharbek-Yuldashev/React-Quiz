import React from "react";

export default function StartScreen({ numsQuestion, onClick }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numsQuestion} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={onClick}>
        Let's start
      </button>
    </div>
  );
}
