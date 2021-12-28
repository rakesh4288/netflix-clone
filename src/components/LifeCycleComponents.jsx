import React, { Component } from "react";

class LifeCycleComponents extends Component {
  constructor(props) {
    super(props);
    console.log("Construcotr");
    this.state = {
      name: "prasad",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  callHandler() {
    this.setState((prevState) => ({
      name: "rakesh",
    }));
  }

  render() {
    console.log("render");
    return (
      <>
        <h3>LifeCycleComponents</h3>
        <button onClick={this.callHandler}>Cick</button>
        <h3>{this.state.name}</h3>
      </>
    );
  }
}

export default LifeCycleComponents;
