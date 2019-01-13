import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from '../context';


class Contacts extends Component {
  // this constructor method runs when Contacts compo is mounted
  // constructor() {
  // calls parent of this constructor
  // super();
  // this.state = {---}
  // constructor is uded when we have to initiate something.

  



  render() {

    return (
      <Consumer>
        {value => {
          // destructuring vulue obj
          const { contacts } = value;
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
          )
        }}
      </Consumer>
    );
  }
}

export default Contacts;
