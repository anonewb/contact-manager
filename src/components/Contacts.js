import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // this constructor method runs when Contacts compo is mounted
  // constructor() {
  // calls parent of this constructor
  // super();
  // this.state = {---}
  // constructor is uded when we have to initiate something.

  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "5555555555"
      },
      {
        id: 2,
        name: "Dave Smith",
        email: "dave@gmail.com",
        phone: "7777777777"
      },
      {
        id: 3,
        name: "Jane Doe",
        email: "jane@gmail.com",
        phone: "9999999999"
      }
    ]
  };

  render() {
    // destructuring state obj
    const { contacts } = this.state;

    return (
      // use React.Fragment when we want to return multiple components and no extra wrapper div is used for anying styling.
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
