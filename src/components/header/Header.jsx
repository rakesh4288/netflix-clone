import React from "react";
import "./Header.css";
import Logo from "./Logo";
import MenuWrapper from "./MenuWrapper";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Logo />
        <MenuWrapper />
        {/* <Serach /> */}
      </>
    );
  }
}
export default Header;
