import React, { Component } from 'react';


class Playground extends Component {

  state = {
    knobActive: false
  }

  componentDidMount() {
  }



  render() {
    return (
      <div className="playground" style={{textAlign: "center"}}>
        <div className="pg-slider__box" onClick={() => this.setState({ knobActive: !this.state.knobActive})} >
          <div className="pg-slider__icon pg-slider__icon--sun">🌞</div>
          <div className="pg-slider__icon pg-slider__icon--moon">🌚</div>
          <div className={`pg-slider__knob ${this.state.knobActive ? "pg-slider__knob--active" : ""}`} ></div>
        </div>
        would be nicer to drag this toggl, right?
      </div>
    );
  }
}

export default Playground;



