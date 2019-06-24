import React from "react";

const userInput = props => {
  return (
    <div className="Input">
      <input type="text" onChange={props.changed} value={props.userName} />
    </div>
  );
};

export default userInput;
