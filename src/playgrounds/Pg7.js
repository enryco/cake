import React, { Component } from 'react'
import CyclicOrder from './CyclicOrder'
import _ from 'lodash'

class FlowerPower extends Component {

  state = {
    animate: false,
    flowers: {
      0: 'x'
    },
    lof: [
      {
        url: process.env.PUBLIC_URL + '/petals/petal_1.png',
        params: {
          phi: 0,
          n: 15,
          radiusRatio: 2.6,
          width: 50,
        }
      },
      {
        url: process.env.PUBLIC_URL + '/petals/petal_2.png',
        params: {
          phi: 0,
          n: 30,
          radiusRatio: 3,
          width: 50,
        }
      },
      {
        url: process.env.PUBLIC_URL + '/petals/petal_3.png',
        params: {
          phi: 0,
          n: 35,
          radiusRatio: 4,
          width: 50,
        }
      },
      {
        url: process.env.PUBLIC_URL + '/petals/petal_4.png',
        params: {
          phi: 0,
          n: 26,
          radiusRatio: 6,
          width: 50,
        }
      },
      {
        url: process.env.PUBLIC_URL + '/petals/petal_5.png',
        params: {
          phi: 0,
          n: 20,
          radiusRatio: 12,
          width: 50,
        }
      },
      {
        url: process.env.PUBLIC_URL + '/petals/petal_6.png',
        params: {
          phi: 0,
          n: 13,
          radiusRatio: 20,
          width: 50,
        }
      },
    ],

  }

  componentDidMount() {
    // this.animate()
  }

  componentWillUnmount() {
    console.log('unmounting')

    this.setState({
      animate: false,
    })
  }

  constructFlowerElement = (url, w, h) => {
    return <img src={url} alt="" style={{ width: w }} />
  }

  animate = () => {

    const factor = (1 - this.state.mouse.x / window.innerWidth) * 9 + 1
    const spread = (this.state.mouse.y / window.innerHeight) * 10

    const lof = _.map(this.state.lof, (flower, i) => {
      flower.params.phi = flower.params.phi + (i + spread) / factor
      return flower
    })

    this.setState({ lof })

    if (this.state.animate) requestAnimationFrame(this.animate)

  }


  handleClick = (e) => {
    e.preventDefault()
    this.setState({ animate: !this.state.animate })
    requestAnimationFrame(this.animate)
  }

  render() {

    const { lof, animate } = this.state

    return (
      <div className="" style={{ background: "white", width: "100vw", height: "100vh" }}
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
          {animate ? 'stop' : 'animate'}
        </button>
        {
          _.map(lof, (flower, index) => {

            const jsx = this.constructFlowerElement(flower.url, flower.params.width)
            const params = flower.params

            return <CyclicOrder
              key={index}
              phi={params.phi}
              radiusRatio={params.radiusRatio}
              elements={_.times(params.n, () => jsx)}
            />
          })
        }
      </div>
    );
  }
}

export default FlowerPower;
