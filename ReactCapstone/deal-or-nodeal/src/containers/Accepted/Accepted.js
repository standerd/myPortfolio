import React from "react";
import "./Accepted.css";

const accepted = props => {
  // "/accepted" loads if the user accepts the bankers offer or if the remaining
  // caseCount is = to 2.
  return (
    <div className="accepted">
      <div className="display">
        <h1>You have won R {props.winning}</h1>
        <h1>Your Case Was</h1>
        <img
          className="imgClass"
          alt=""
          src={require("../../images/openCases/" + props.userImg + ".png")}
        />
        <button className="btnTest">
          <a href="/">Start New Game</a>
        </button>
      </div>
    </div>
  );
};

export default accepted;
