import React, { Component } from "react";
import "./App.css";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userName: "default"
  };

  changeUserName = event => {
    let usrName = event.target.value;
    this.setState({ userName: usrName });
  };

  render() {
    return (
      <div className="App">
        <h1>This is working</h1>
        <UserInput
          userName={this.state.userName}
          changed={event => this.changeUserName(event)}
        />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
