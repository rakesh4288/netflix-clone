import React, { Component } from "react";

class LifeCycleComponents extends Component {
  constructor(props) {
    super(props)
    console.log("1 = constructor is called");
    this.state = {
      firstName: 'Prasad',
      lastName : 'Mudgal'
    }
  }

  componentDidMount() {
    console.log("3 = componentDidMount is called");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("4 = componentDidUpdate is called");
  }

  callHandler() {
    alert('inside callHandler method');
    this.setState({
      firstName: 'Rakesh',
      lastName: 'Shah'
    });
  }

  render() {
    console.log("2 = render is called");
    return (
      <>
        <section className="lifeCycle">
          <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h2>State and Lifecycle</h2>
                </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <ul>
                    <li>Constructor</li>
                    <li>Render</li>
                    <li>componentDidUpdate</li>
                  </ul>
                  
                  <button className="btn btn-primary btn-sm" onClick={ ()=> this.callHandler()}>Click here</button>
                  <h4>First Name: {this.state.firstName} </h4>
                  <h4>Last Name: {this.state.lastName} </h4>
              </div>

                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <iframe width="100%" height="400px" src="https://www.youtube.com/embed/qnN_FuFNq2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
          </div>
        </section>
        
      </>
    );
  }
}

export default LifeCycleComponents;
