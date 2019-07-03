import React from "react";
import "./App.css";
import img from "./profile.jpg";
import Table from "react-bootstrap/Table";

function App() {
  // Person variable decleration

  let person = {
    name: "Dewald",
    surname: "Stander",
    date_of_birth: "1983/06/14",
    country: "South Africa",
    email: "stander@gmail.com",
    telephone: "082 334 5450 ",
    company: "Magic Web Services",
    profile_picture: img,
    interests: ["Reading", "Cycling", "Cooking"]
  };

  // JSX Return
  return (
    <div className="App">
      {/* import react bootstrap */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous"
      />
      <header>
        <h1>Selected User Profile</h1>
      </header>

      {/* Load user Profile information into table */}

      <img className="img" src={person.profile_picture} alt="headshot" />
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{person.name}</td>
          </tr>
          <tr>
            <td>Surname:</td>
            <td>{person.surname}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{person.date_of_birth}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{person.country}</td>
          </tr>
          <tr>
            <td>E-Mail:</td>
            <td>{person.email}</td>
          </tr>
          <tr>
            <td>Telephone:</td>
            <td>{person.telephone}</td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>{person.company}</td>
          </tr>
          <tr>
            <td rowspan="3">Hobbies:</td>
            <td>{person.interests[0]}</td>
          </tr>
          <tr>
            <td>{person.interests[1]}</td>
          </tr>
          <tr>
            <td>{person.interests[2]}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
