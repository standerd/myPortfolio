import React from "react";
import classes from "./Spinner.css";

const spinner = () => (
  <div className = {classes.Lds_ring}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default spinner
