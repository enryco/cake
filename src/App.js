import React, { Component } from 'react';
import logo from './logo.svg';
import Pg1 from './playgrounds/Pg1'
import Pg2 from './playgrounds/Pg2'
import Pg3 from './playgrounds/Pg3'
import Pg4 from './playgrounds/Pg4'
import Pg5 from './playgrounds/Pg5'
import Pg6 from './playgrounds/FixedDynamicMenu'
import Pg7 from './playgrounds/Pg7'
import Pg8 from './playgrounds/Pg8'
import Pg9 from './playgrounds/Pg9'
import _ from 'lodash'
import { Collapse } from 'react-collapse';

class App extends Component {

  state = {
    pg: 7,
    showMenu: true
  }

  componentDidMount() {
  }

  playgrounds = [
    <Pg1 />,
    <Pg2 />,
    <Pg3 />,
    <Pg4 />,
    <Pg5 />,
    <Pg6 />,
    <Pg7 />,
    <Pg8 />,
    <Pg9 />,
  ]

  render() {
    const playgroundNames = [
      "Order and Chaos",
      "Sticky Info ",
      "Recursive Family Tree ",
      "ThreeJS ",
      "ThreeJS ",
      "Dynamic Menu ",
      "FlowerPower",
      "😁 Clock",
      "Fake Toggel",
    ]

    return (
      <div className="App">
        <div className="playground-list">
          <Collapse isOpened={this.state.showMenu} >
            {
              _.map(playgroundNames, (name, index) => {
                const active = this.state.pg === index ? true : false
                return <div key={index} className={`playground-list__item ${active && "playground-list__item--active"}`} onClick={() => this.setState({ pg: index })}>#{index} {name}</div>
              })
            }
          </Collapse>
          <div className={`playground-list__menu-toggle`} onClick={() => this.setState({ showMenu: !this.state.showMenu })}>{this.state.showMenu ? '⬆⬆⬆' : '⬇⬇⬇'}</div>
        </div>

        <div className="content">
          {
            this.playgrounds[this.state.pg]
          }
        </div>
      </div>
    );
  }
}

export default App;



