import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="jdoe@gmail.com" phone="8888888888" />
          <Contact name="Dave Smith" email="dave@gmail.com" phone="7777777777" />
        </div>
      </div>
    );
  }
}

export default App;
