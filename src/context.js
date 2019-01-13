import React, { Component } from 'react';

// using Context API for managing state
const Context = React.createContext();

export class Provider extends Component {
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
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;