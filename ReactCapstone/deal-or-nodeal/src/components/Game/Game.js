import React, { Component } from "react";
import CaseSelection from "../../containers/CaseSelection/CaseSelection";
import Landing from "../../containers/landing/landing";
import Accepted from "../../containers/Accepted/Accepted";
import { Route, withRouter } from "react-router-dom";

class Game extends Component {
  // setup constructors and state variables
  constructor(props) {
    super(props);
    this.state = {
      caseNo: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ],
      randomCases: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ],
      openCases: [
        { value: 0.01, img: "v1", status: "", second: "" },
        { value: 0.05, img: "v2", status: "", second: "" },
        { value: 0.1, img: "v3", status: "", second: "" },
        { value: 0.2, img: "v4", status: "", second: "" },
        { value: 0.5, img: "v5", status: "", second: "" },
        { value: 1, img: "v6", status: "", second: "" },
        { value: 5, img: "v7", status: "", second: "" },
        { value: 10, img: "v8", status: "", second: "" },
        { value: 20, img: "v9", status: "", second: "" },
        { value: 50, img: "v10", status: "", second: "" },
        { value: 100, img: "v11", status: "", second: "" },
        { value: 250, img: "v12", status: "", second: "" },
        { value: 500, img: "v13", status: "", second: "" },
        { value: 750, img: "v14", status: "", second: "" },
        { value: 1000, img: "v15", status: "", second: "" },
        { value: 5000, img: "v16", status: "", second: "" },
        { value: 10000, img: "v17", status: "", second: "" },
        { value: 20000, img: "v18", status: "", second: "" },
        { value: 50000, img: "v19", status: "", second: "" },
        { value: 100000, img: "v20", status: "", second: "" },
        { value: 250000, img: "v21", status: "", second: "" },
        { value: 500000, img: "v22", status: "", second: "" },
        { value: 750000, img: "v23", status: "", second: "" },
        { value: 1000000, img: "v24", status: "", second: "" }
      ],
      userCase: 0,
      userValue: 0,
      caseSel: 0,
      selectedCase: 0,
      modal: 1,
      selecting: true,
      round: 1,
      caseCount: 6,
      roundValues: [6, 5, 4, 3, 2, 1, 1, 1],
      remainingValue: 2687686.86,
      remainingCases: 24,
      banker: 1,
      offer: 0
    };
  }

  //main app function when user clickes on a suitcase image
  //1. Selects the users suitcase and then subsequantly selects suitcases
  //to remove them from the remaining suitcases.

  imgClicked = e => {
    //new array for updating the className to add styling to selected cases images
    const newOpenCases = this.state.openCases.slice();
    if (this.state.selecting) {
      this.setState(
        // sets the suitcase selected id for use.
        { caseSel: e.currentTarget.dataset.id, selecting: false },
        () => {
          // update the cases array with className
          newOpenCases[this.state.caseSel - 1].status = "yourCase";
          this.setState(
            {
              //sets the usercase and also set the cases array = to new array
              userCase: this.state.randomCases[this.state.caseSel - 1],
              openCases: newOpenCases
            },
            () => {
              this.setState(
                {
                  userValue: this.state.openCases[this.state.userCase - 1].value
                },
                () => {
                  console.log("Usercase is " + this.state.userCase);
                  console.log("User Value is " + this.state.userValue);
                  console.log("Case Selected is " + this.state.caseSel);
                }
              );
            }
          );
        }
      );
    } else {
      //if the userCase has been set this is called to start removing the remaining cases from the stack
      this.setState(
        { caseSel: e.currentTarget.dataset.id, selecting: false },
        () => {
          //sets image className to show suitcases selected
          newOpenCases[this.state.caseSel - 1].status = "yourCase";
          this.setState(
            {
              selectedCase: this.state.randomCases[this.state.caseSel - 1],
              openCases: newOpenCases
            },
            () => {
              //sets the className for the LI list items so that the values that have
              //been selected are shown to the user and they can easily see what is remaining
              newOpenCases[this.state.selectedCase - 1].second = "yourCase";
              //this sets the modal value to 2 and renders the suitase value image for 2 seconds
              this.setState({ modal: 2, openCases: newOpenCases });
              this.setState(
                // sets the remaing suitcases total value and the remaining count, this is used
                // to calculate the users offer
                (prevState, props) => {
                  return {
                    remainingValue:
                      prevState.remainingValue -
                      this.state.openCases[this.state.selectedCase - 1].value,
                    remainingCases: prevState.remainingCases - 1
                  };
                },
                () => {
                  //the set timeout function is called after 2 seconds to remove the case image and
                  //return the user back to the caseSelection screen
                  setTimeout(() => {
                    console.log("Selected Case is " + this.state.selectedCase);
                    console.log(
                      "RemainingValue is " + this.state.remainingValue
                    );
                    console.log(
                      "RemainingCases is " + this.state.remainingCases
                    );
                    console.log("Case Selected is " + this.state.caseSel);
                    this.caseOpen();
                  }, 2000);
                }
              );
            }
          );
        }
      );
    }
  };

  // caseOpen is called after 2 second from clicking the image to select the case
  // if the case is the final case in the round it will load the Banker offer screen
  // to show the user the offer and they can then select to accept or not.
  caseOpen = () => {
    if (this.state.caseCount > 0) {
      this.setState({ caseCount: this.state.caseCount - 1 });
    }
    if (this.state.caseCount > 0) {
      this.setState({ modal: 1 });
    } else {
      this.setState(
        { offer: this.state.remainingValue / this.state.remainingCases },
        () => {
          this.setState({ modal: 3, round: this.state.round + 1 });
        }
      );
    }
  };

  componentDidMount() {
    // this takes the array of suitcases and shuffles them randomly so that the
    //case values are different on each load
    const array = this.state.randomCases;
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  render() {
    //the decline handler handles the event if the user declines the offer, if the remaining
    //suitcases are 2 the user is take to the /accepted page and the offer is set = to the user case.
    let declineHandler = () => {
      if (this.state.remainingCases > 2) {
        this.setState({ modal: 1 });
      } else {
        this.setState({ offer: this.state.userValue });
        this.props.history.push("/accepted");
      }
      this.setState({
        caseCount: this.state.roundValues[this.state.round - 1]
      });
    };

    return (
      <div>
        <Route path="/" exact component={Landing} />
        <Route
          path="/select"
          render={props => (
            <CaseSelection
              {...props}
              imgRemain={this.state.caseNo}
              imgClicked={this.imgClicked}
              randomCases={this.state.randomCases}
              modal={this.state.modal}
              status={this.state.openCases}
              imgSource={
                this.state.selectedCase === 0 ? 1 : this.state.selectedCase - 1
              }
              header={this.state.selecting}
              caseCount={this.state.caseCount}
              decline={declineHandler}
              offer={this.state.offer.toFixed(2)}
              casesToOpen={this.state.roundValues[this.state.round - 1]}
              change={this.handleSubmit}
            />
          )}
        />
        <Route
          path="/accepted"
          render={props => (
            <Accepted
              {...props}
              winning={this.state.offer.toFixed(2)}
              userImg={this.state.openCases[this.state.userCase - 1].img}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(Game);
