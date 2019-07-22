import React from "./react";
import "./SelectedCase.css";

const SelectedCase = () => {

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

    const imgClicked = e => {
      let caseSel = e.currentTarget.dataset.id;
      let imgClick = document.getElementById(caseSel);
      console.log(caseSel + ' ' + typeof(caseSel))
      imgClick.classList.add("yourCase");
    };

    let imgToLoad = this.props.imgRemain.map(imgK => {
      return (
        <img
          onClick={imgClicked.bind(this)}
          data-id={imgK}
          id={imgK}
          key={imgK}
          className="selected"
          src={require("../../images/cases/" + imgK + ".png")}
          alt=""
        />
      );
    });

    let leftList = leftRem.map(key => {
      return (
        <li key={key} className="caseVal">
          {key}
        </li>
      );
    });

    let rightList = rightRem.map(key => {
      return (
        <li key={key} className="caseVal">
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
          <h1 className="message">PLEASE SELECT YOUR CASE</h1>
          {imgToLoad}
        </div>
        <div className="right">
          <ul>{rightList}</ul>
        </div>
      </div>
    );
  }
}

export default SelectedCase;
