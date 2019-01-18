import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("ComponentDidMount...");
    // 2nd most used lifecycle method after render()
    // here is where we make http requests to backend, ajax calls, fetching data from another compo.
  }

  // Discouraged to use this method
  // componentWillMount() {
  //   console.log("ComponentWillMount...");
  // }

  // instead use this method or prefix "UNSAFE_"
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps...");
    return {
      test:
        "this is how state is changed and we dont use this.setState() in this lifecycle method"
    };
  }

  // instead use this method or prefix "UNSAFE_"
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate...");
  }

  componentDidUpdate() {
    // runs when state is changed
  }

  render() {
    return (
      <div>
        <h1>Test component for Lifecycle methods</h1>
      </div>
    );
  }
}

export default Test;
