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

class App extends Component {

  state = {
    pg: 8,
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
      "Playground #00 - Order and Chaos",
      "Playground #01 - Sticky Info ",
      "Playground #02 - Recursive Family Tree ",
      "Playground #03 - ThreeJS ",
      "Playground #04 - ThreeJS ",
      "Playground #05 - Dynamic Menu ",
      "Playground #06 - FlowerPower",
      "Playground #07 - 😁 Clock",
      "Playground #08 - Fake Toggel",
    ]

    return (
      <div className="App">

        {
          this.state.showMenu && <div className="playground-list">
            {
              _.map(playgroundNames, (name, index) => <div className="playground-list-item" onClick={() => this.setState({ pg: index })}>{name}</div>)
            }
          </div>
        }

        {
          this.playgrounds[this.state.pg]
        }

      </div>
    );
  }
}

export default App;



