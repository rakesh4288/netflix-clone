import React, { Component } from "react";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.menuText,
    };
  }

  render() {
    return <a> {this.state.item} </a>;
  }
}
