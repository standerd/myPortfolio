import React, { Component } from "react";
import "./CaseSelection.css";
import Banker from "../banker/banker";

let leftRem = [
  "1c",
  "5c",
  "10c",
  "20c",
  "50c",
  "R 1",
  "R 5",
  "R 10",
  "R 20",
  "R 50",
  "R 100",
  "R 250"
];

let rightRem = [
  "R 500",
  "R 750",
  "R 1 000",
  "R 5 000",
  "R 10 000",
  "R 20 000",
  "R 50 000",
  "R 100 000",
  "R 250 000",
  "R 500 000",
  "R 750 000",
  "R 1 000 00"
];

let imgS = [
  "v1",
  "v2",
  "v3",
  "v4",
  "v5",
  "v6",
  "v7",
  "v8",
  "v9",
  "v10",
  "v11",
  "v12",
  "v13",
  "v14",
  "v15",
  "v16",
  "v17",
  "v18",
  "v19",
  "v20",
  "v21",
  "v22",
  "v23",
  "v24"
];

class CaseSelection extends Component {
  render() {
    let imgDisable = () => null;
    let imgToLoad = this.props.imgRemain.map(imgK => {
      return (
        <img
          onClick={
            this.props.status[imgK - 1].status === "yourCase"
              ? imgDisable
              : this.props.imgClicked.bind(this)
          }
          data-id={imgK}
          id={imgK}
          key={imgK}
          className={this.props.status[imgK - 1].status}
          src={require("../../images/cases/" + imgK + ".png")}
          alt=""
        />
      );
    });

    let modalImg = (
      <div>
        <img
          className="selectedImg"
          src={require("../../images/openCases/" +
            imgS[this.props.imgSource] +
            ".png")}
          alt=""
        />
      </div>
    );

    let banker = (
      <Banker
        decline={this.props.decline}
        offer={this.props.offer}
        casesToOpen={this.props.casesToOpen}
        change={this.props.handleSubmit}
      />
    );

    let modal = () => {
      if (this.props.modal === 1) {
        return imgToLoad;
      } else if (this.props.modal === 2) {
        return modalImg;
      } else if (this.props.modal === 3) {
        return banker;
      }
    };

    let header = () => {
      if (this.props.header) {
        return <h1 className="message">PLEASE SELECT YOUR CASE</h1>;
      } else {
        if (this.props.caseCount === 1) {
          return (
            <h1 className="message">
              PLEASE SELECT {this.props.caseCount} CASE
            </h1>
          );
        } else {
          return (
            <h1 className="message">
              PLEASE SELECT {this.props.caseCount} CASES
            </h1>
          );
        }
      }
    };

    let leftList = leftRem.map((key, i) => {
      return (
        <li key={i} className={this.props.status[i].second}>
          {key}
        </li>
      );
    });

    let rightList = rightRem.map((key, i) => {
      return (
        <li key={key} className={this.props.status[i + 12].second}>
          {key}
        </li>
      );
    });

    return (
      <div className="casesMain">
        <div className="left">
          <ul>{leftList}</ul>
        </div>

        <div className="cases">
          {header()}
          {modal()}
        </div>

        <div className="right">
          <ul>{rightList}</ul>
        </div>
      </div>
    );
  }
}

export default CaseSelection;
