import React, { Component } from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact_ref";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          {/* branding is passed as props for Header compo */}
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
