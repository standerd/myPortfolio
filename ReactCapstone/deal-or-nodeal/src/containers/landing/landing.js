import React, { Component } from "react";
import "./landing.css";

class Landing extends Component {
  state = {
    help: false
  };

  loadHelp = () => {
    this.setState({help : !this.state.help})
  }

  render() {
    let content = () => {
      if (this.state.help) {
        return (
          <div className="helpScreen">
            <h1>GAME RULES</h1>
            <p>The object of the game is to get the banker to offer you more money then what you have 
               in the suitcase that you selected. <br></br><br></br>
               As the game progresses the bankers offer will change depending on the values
               that are in the remaining cases. <br></br><br></br>
               The main goal is to try and pick suitcases with the smallest values inside them. 
               This way you will obtain higher offers from the bank.
            </p>
            <ol className="rulesUL">
              <li>On the first screen please select your case.</li>
              <li>On the second screen you will be shown a heading indicating how many suitcases you
                  are to select in the round. This number will reduce as you select cases to indicate how 
                  many cases are remaining in the current round.
              </li>
              <li>Once the remaing suitcases reach 0, a page will display where the banker will offer you a sum
                  of money for your suitcase. 
              </li>
              <li>You can either accept his offer or reject his offer and continue with the game.</li>
              <li>The suitcases that you need to select will reduce in each round and be indicated in
                  the heading.
              </li>
              <li>Once you reach only 1 case remaining and you still decline the bankers offer. You will
                  win whatever value was contained inside the suitcase that you had selected.
              </li>
              <li>GOOD LUCK</li>
            </ol>
            <button className="exit" onClick={this.loadHelp}>BACK</button>
          </div>
        );
      } else {
        return (
          <div className="landing">
            <button onClick={this.loadHelp} className="help">
              Help
            </button>
            <button className="button">
              <a href="/select">START THE GAME</a>
            </button>
          </div>
        );
      }
    };

    return <div>{content()}</div>;
  }
}

export default Landing;
