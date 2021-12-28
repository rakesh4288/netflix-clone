import React, { Component } from "react";
import {Link, Router} from 'react-router-dom';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.menuText,
    };
  }

  render() {
    return <Link to="" className="menuItems"> {this.state.item} </Link>;
  }
}

export default MenuItem;
