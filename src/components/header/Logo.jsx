import React, { Component } from "react";
import logo from "../../assets/images/nextflix-logo.png";

class Logo extends Component {
  render() {
    return (
      <>
        <img src={logo} width="200px" height="80px" />
      </>
    );
  }
}
export default Logo;
