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

  deleteContact = (id) => {
    // console.log(id)
    const { contacts } = this.state;

    // cant use only setState() as we are not modifying rather we are deleting item from it
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    })
  }



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
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                  // point 'contact.id' to 'this' in deleteContact()
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
