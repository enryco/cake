import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import canvas from './canvas'

class App extends Component {

  componentDidMount(){
    canvas()
  }

  render() {
    return (
      <div className="App">
          <p id="desc" style={{ position: "absolute", width: "100vw", textAlign: "center"}}>
            Order and Chaos
          </p>
        <div>
        <canvas id="c">
        </canvas>
        </div>
      </div>
    );
  }
}

export default App;



