import React from "react";

function Progress({ index, numsQuestion, points, maxPossiblePoints, answer }) {
  return (
    <div className="progress">
      <progress
        max={numsQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        <strong>{index + 1}</strong> / {numsQuestion}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
