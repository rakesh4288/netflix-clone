import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import LifeCycleComponents from "./components/LifeCycleComponents";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe() {
    //alert('inside clickMe');
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="pageBody">
          <div className="container">
            Hello We are learning React !!
            <br />
            <button
              onClick={this.clickMe}
              className={this.state.isToggleOn ? "ON" : "OFF"}
            >
              {this.state.isToggleOn ? "ON" : "OFF"}
            </button>
          </div>
        </main>
        <LifeCycleComponents />

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
