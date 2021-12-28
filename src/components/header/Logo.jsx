import React, { Component } from "react";
import logo from "../../assets/images/nextflix-logo.png";
import {Link} from 'react-router-dom'

class Logo extends Component {
  render() {
    return (
        <Link to="">
          <img src={logo} width="200px" height="70px" />
        </Link>
    );
  }
}
export default Logo;
