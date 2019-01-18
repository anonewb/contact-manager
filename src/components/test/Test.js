import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    console.log("ComponentDidMount...");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          name: data.name,
          email: data.email,
          phone: data.phone
        })
      );
  }

  // Discouraged to use this method
  // componentWillMount() {
  //   console.log("ComponentWillMount...");
  // }

  // instead use this method or prefix "UNSAFE_"
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps...");
  //   return {
  //     test:
  //       "this is how state is changed and we dont use this.setState() in this lifecycle method"
  //   };
  // }

  // instead use this method or prefix "UNSAFE_"
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  // componentDidUpdate() {
  //   // runs when state is changed
  // }

  render() {
    const { name, email, phone } = this.state;
    return (
      <div>
        <h1>Test component for Lifecycle methods</h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    );
  }
}

export default Test;
