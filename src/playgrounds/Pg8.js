import React, { Component } from 'react'
import CyclicOrder from './CyclicOrder'
import _ from 'lodash'
import moment from 'moment'

class FlowerPower extends Component {

  state = {
    animate: false,
    hoursAngle: 0,
    minutesAngle: 0,
    input: '😋'
  }

  componentDidMount() {
    this.handleClick()
  }

  animate = () => {

    const hours = Number(moment().format('h'))
    const minutes = moment().minutes()
    const seconds = moment().seconds()

    const hoursAngle = ((hours + minutes / 60) / 12) * 360
    const minutesAngle = minutes / 60 * 360
    const secondsAngle = seconds / 60 * 360

    this.setState({
      hoursAngle,
      minutesAngle,
      secondsAngle
    })

    if (this.state.animate) requestAnimationFrame(this.animate)

  }


  handleClick = (e) => {
    e && e.preventDefault()
    this.setState({ animate: !this.state.animate })
    requestAnimationFrame(this.animate)
  }

  render() {

    const { animate } = this.state
    const hoursAngle = this.state.hoursAngle
    const minutesAngle = this.state.minutesAngle
    const secondsAngle = this.state.secondsAngle

    return (
      <div className="" style={{
        background: "white",
        width: "100vw",
        height: "100vh",
        textAlign: 'center',
        fontSize: '10'
      }}
        onMouseMove={e => this.setState({ mouse: { x: e.clientX, y: e.clientY } })}
      >
        <button
          style={{
            background: animate ? 'red' : 'green',
            border: '1px solid grey',
            borderRadius: '15px',
            margin: 5,
            padding: 5,
            width: 75,
            color: 'white',
          }}
          onClick={this.handleClick} >
          {animate ? 'stop' : 'start'}
        </button>
        <input type="text" value={this.state.input} onChange={e => this.setState({ input: e.target.value })} />
        <CyclicOrder
          phi={0}
          radiusRatio={3.5}
          elements={_.times(12, () => <span>|</span>)}
        />
        <CyclicOrder
          phi={0}
          radiusRatio={3.5}
          elements={_.concat(_.times(moment().seconds() + 1 , () => <div>{' '}</div>),_.times(59 - moment().seconds(), () => <div>🍰</div>))}
        />
        <CyclicOrder
          name="first-hand"
          phi={minutesAngle}
          radiusRatio={8}
          elements={_.times(1, () => <div>M<br />I<br />N<br />U<br />T<br />E<br />S<br />({moment().format('mm')})</div>)}
        />
        <CyclicOrder
          name="second-hand"
          phi={hoursAngle}
          radiusRatio={6}
          elements={_.times(1, () => <div>H<br />O<br />U<br />R<br />S<br />({moment().hours()})</div>)
          }
        />
        <CyclicOrder
          phi={secondsAngle}
          radiusRatio={3.5}
          elements={_.times(1, () => <div>{this.state.input}</div>)}
        />
      </div>
    );
  }
}

export default FlowerPower;
