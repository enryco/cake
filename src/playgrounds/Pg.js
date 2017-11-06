import React, { Component } from 'react';


class Playground extends Component {

  componentDidMount() {
  }



  render() {
    const testFam = this.state.testFam
    console.log(testFam)
    return (
      <div className="playground" style={{textAlign: "center"}}>
      </div>
    );
  }
}

export default Playground;



