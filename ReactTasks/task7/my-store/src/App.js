import React from "react";
import Header from "./components/Header";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Products from "./components/Products/Products";

const isLoggedIn = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header isLoggedIn={isLoggedIn} userName="Dewald" />
      </header>

      <Landing welcome="Welcome to Our Site" />

      <Products />
    </div>
  );
}

export default App;
