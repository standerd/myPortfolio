import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28, id: "dsfdf" },
      { name: "Manu", age: 22, id: "dsd" },
      { name: "Stephanie", age: 26, id: "ddaa" }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 22 },
        { name: "Stephanie", age: 20 }
      ]
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const currentPerson = this.state.showPersons;
    this.setState({
      showPersons: !currentPerson
    });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    // const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      borderRadius: "10px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React Application</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 22 },
//       { name: "Stephanie", age: 26 }
//     ]
//   };

//   switchNameHandler = newName => {
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "Manu", age: 22 },
//         { name: "Stephanie", age: 20 }
//       ]
//     });
//   };

//   changeNameHandler = event => {
//     this.setState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: event.target.value, age: 22 },
//         { name: "Stephanie", age: 20 }
//       ]
//     });
//   };
// }

//   render() {
//     const style = {
//       backgroundColor: "white",
//       font: "inherit",
//       border: "1px solid blue",
//       padding: "8px",
//       borderRadius: "10px",
//       cursor: "pointer"
//     };

//     return (
//       <div className="App">
//         <h1>Hi, I am a React Application</h1>
//         <p>This is really working</p>
//         <button
//           style={style}
//           onClick={this.switchNameHandler.bind(this, "Dewald Stander")}
//         >
//           Switch Name
//         </button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           click={this.switchNameHandler}
//           change={this.changeNameHandler}
//         />
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         >
//           {" "}
//           I play Rugby
//         </Person>
//       </div>
//     );
//   }
// }
