import React from "react";
import "./UI.css";

const UI = props => {
  return (
    <div className="Calculator">
      <input type="text" value={props.value} active="true" />
      <br />
      <div className="rowOne">
        <button>(</button>
        <button>)</button>
        <button>%</button>
        <button>AC</button>
      </div>
      <div className="rowOther">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>
          &#10005;
        </button>
      </div>
      <div className="rowOther">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>&#10135;</button>
      </div>
      <div className="rowOther">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>&#10133;</button>
      </div>
      <div className="rowOther">
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>&#10134;</button>
      </div>
    </div>
  );
};

export default UI;
