import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pg1 from './playgrounds/Pg1'

class App extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
          <Pg1 />
      </div>
    );
  }
}

export default App;



