import React from "react";

const userOutput = props => {
  return (
    <div className="Output">
      <p>The user name that was received is {props.userName}</p>
    </div>
  );
};

export default userOutput;
