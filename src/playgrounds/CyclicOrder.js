import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash'

class CyclicOrder extends Component {

  state = {
    isLoading: true,
    windowDim: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  ref = []


  componentDidMount() {

    // wait until elements are rendered so we can display them properly as we calculate
    // their position relative to themselfes
    Promise.all([this.ref]).then(p => this.setState({ isLoading: false }))

    // add eventhandler if window is being resized
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({
      windowDim: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  radius = () => {
    if (_.has(this.props, 'radius')) { return this.props.radius }
    if (_.has(this.props, 'radiusRatio')) {
      const dim = this.state.windowDim.width > this.state.windowDim.height ? this.state.windowDim.height : this.state.windowDim.width
      return dim / this.props.radiusRatio
    }
  }

  coordinatesOnCircle = (index, elementsArray, _phi = 0) => {

    const radius = this.radius()
    _phi -= 180 // correction as we want to display it analog to a clock
    const phi = -_phi / 180 * Math.PI

    // const index = _.findIndex(elementsArray, e => e == key)

    const fullCircle = 2 * Math.PI
    const alpha = -fullCircle / elementsArray.length * (index)

    const x = radius * Math.sin(alpha + phi)
    const y = radius * Math.cos(alpha + phi)

    const spinAngle =  -(alpha + phi) + Math.PI

    return { x, y, spinAngle }
  }

  render() {
    const elements = this.props.elements

    return <div>
      {_.map(elements, (elem, index, arr) => {

        const offset = {
          x: 0,
          y: 0
        }

        offset.x = offset.x + (window.innerWidth / 2)
        offset.y = offset.y + (window.innerHeight / 2)

        if (this.ref[index]) {
          offset.x -= this.ref[index].clientWidth / 2
          offset.y -= this.ref[index].clientHeight / 2
        }

        const circleCord = this.coordinatesOnCircle(index, arr, this.props.phi)

        const rotate = `rotateZ(${circleCord.spinAngle}rad`
        const translate = `translate(${offset.x + circleCord.x}px,${offset.y + circleCord.y}px)`
        const transform = translate + ' ' + rotate


        return <div
          key={index}
          className="co-cyclic-order"
          ref={e => { this.ref[index] = e && e }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform,
            visibility: this.state.isLoading ? 'hidden' : 'visible',
          }}
        >
          {elem}
        </div>
      })
      }
    </div>
  }

}

export default CyclicOrder

CyclicOrder.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.element).isRequired,
  radiusRatio: PropTypes.number,
  radius: PropTypes.number,
  phi: PropTypes.number
}


CyclicOrder.defaultProps = {
  radiusRatio: 4,
  phi: 0
}
