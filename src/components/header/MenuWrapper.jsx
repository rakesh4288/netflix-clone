import React, { Component } from "react";
import MenuItem from "./MenuItem";

class MenuWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: ["Home", "TV Shows", "Movies", "Recently Added", "My List"],
    };
  }
  render() {
    const menuListArr = this.state.menuItems;
    return (
      <div>
        {menuListArr.map((items) => (
          <MenuItem menuText={items} />
        ))}
      </div>
    );
  }
}

export default MenuWrapper;
