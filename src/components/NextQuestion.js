import React from "react";

function NextQuestion({ dispatch, answer, index, numsQuestion }) {
  if (answer === null) return null;

  if (index === numsQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextQuestion;
