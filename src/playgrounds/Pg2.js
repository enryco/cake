import React, { Component } from 'react';
import canvas from './Pg1Canvas'

class Pg2 extends Component {

  componentDidMount() {
  }

  state = {
    mousePosition: {
      x: 0,
      y: 0
    },
    showSource: false
  }

  handleMousMove = (e) => {
    let mousePosition = {
      x: e.clientX,
      y: e.clientY
    }
    this.setState({ mousePosition })
  }

  render() {
    return (
      <div className="Pg1">
        <p id="desc" style={{ position: "absolute", width: "100vw", textAlign: "center" }}>
          Sticky Info
                </p>
        <div
          style={styles.div}
          onMouseMove={this.handleMousMove}
          onMouseEnter={() => this.setState({ showSource: true })}
          onMouseLeave={() => this.setState({ showSource: false })}
          >
          Target
        </div>

        {this.state.showSource ?
          <div
            className="sticky"
            style={{
              position: "absolute",
              left: this.state.mousePosition.x,
              top: this.state.mousePosition.y - 50
            }}
          >
            Source
                </div>
          :
          null
        }
      </div>
    );
  }
}

const styles = {
  div: {
    position: "absolute",
    width: 200,
    height: 100,
    left: "calc(50vw - 100px)",
    top: "calc(50vh  - 50px)",
    backgroundColor: "ghostwhite",
  }
}

export default Pg2;



