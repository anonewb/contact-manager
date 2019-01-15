import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

// in rcc, props are stored inside {this.props}
class Contacts extends Component {
  render() {
    return (
      // value is available here bcoz of the Context API. Value object is stored inside consumer
      <Consumer>
        {value => {
          // destructuring value obj
          const { contacts } = value;
          return (
            // use React.Fragment when we want to return multiple components and no extra wrapper div is used for anying styling.
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
