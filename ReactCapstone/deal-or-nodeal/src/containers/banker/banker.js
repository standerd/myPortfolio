import React from "react";
import "../CaseSelection/CaseSelection.css";
import { Link } from "react-router-dom";

// banker component loads once a the remaining cases in the round in the caseselection component
// is = to 0. The banker is then loaded showing the offer and giving the user the option
// of accepting the offer to decline and continue with the game.

const banker = props => (
  <div className="banker">
    <h2>The Banker Is Offering You</h2>
    <h2>R {props.offer}</h2>
    <button>
      <Link to="/accepted">Accept</Link>
    </button>
    <button onClick={props.decline}>Decline</button>
    <h2>Cases to Open Next Round {props.casesToOpen} </h2>
  </div>
);

export default banker;
