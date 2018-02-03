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

    const milliseconds = moment().milliseconds()
    let input = milliseconds >= 250 ? '😋' : '😮'
    if (seconds === 0) { input = '🤤' }

    this.setState({
      hoursAngle,
      minutesAngle,
      secondsAngle,
      input
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
        fontSize: 12,
        background: 'ivory',
      }}
        onMouseMove={e => this.setState({ mouse: { x: e.clientX, y: e.clientY } })}
      >
        <br />
        <h2>It's 🍰'o'clock!</h2>
        <CyclicOrder
          phi={0}
          radiusRatio={2.7}
          elements={_.times(12, () => <span>|</span>)}
        />
        <CyclicOrder
          phi={0}
          radiusRatio={2.3}
          shouldSpin={false}
          elements={_.times(12, (i) => <span>{++i}</span>)}
        />
        <CyclicOrder
          phi={0}
          radiusRatio={2.5}
          elements={_.concat(_.times(moment().seconds() + 1, () => <div>{'.'}</div>), _.times(59 - moment().seconds(), () => <div>🍰</div>))}
        />
        <CyclicOrder
          name="first-hand"
          phi={minutesAngle}
          radiusRatio={6}
          elements={_.times(1, () => <div>{moment().format('mm')}<br />M<br />I<br />N<br />U<br />T<br />E<br />S</div>)}
        />
        <CyclicOrder
          name="second-hand"
          phi={hoursAngle}
          radiusRatio={8}
          elements={_.times(1, () => <div>{moment().hours()}<br />H<br />O<br />U<br />R<br />S</div>)
          }
        />
        <CyclicOrder
          phi={secondsAngle}
          radiusRatio={2.5}
          elements={_.times(1, () => <div>{this.state.input}</div>)}
        />
      </div>
    );
  }
}

export default FlowerPower;
