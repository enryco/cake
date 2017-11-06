import React, { Component } from 'react';


class Playground extends Component {

  componentDidMount() {
    init()
  }





  render() {

    return (
      <div id="playground-05" style={{textAlign: "center"}}>
        <div>
          PG5
        </div>
      </div>
    );
  }
}

export default Playground;


function init() {
  const target = document.getElementById('playground-05')
  let elements = new Array(50)

  // set input if wanted
  const input = '🍁'

  elements.fill('0')
  elements = elements.map( e => createElement())

  function createElement() {
    let element = document.createElement('div')
    element.innerText = input
    target.appendChild(element)
    element.style.position = "absolute"
    element.style.left = '50vw'
    element.style.bottom = '0px'
    return element
  }

  function storm(e,t) {

    let rotationSpeed = 1 / 80

    // X-translation
    let y = (-t / 1000 ) * 50
    // let y = e.getBoundingClientRect().y
    // y > 0 ? y -= 10 : y = window.innerHeight
    // y -= 10
    // console.log(y)
    // console.log(e.getBoundingClientRect().y)
    let x = Math.sin(t * rotationSpeed ) * (100 - y/5)
    let transX = `translateX(${x}px) `
    let transY = `translateY(${y}px) `
    let scale = Math.cos( t * rotationSpeed ) / 2 + 1
    let transScale = `scale(${scale},${scale})`
    e.style.transform = transX + transY + transScale

    return y
  }

  let startpositions = elements.map(e => (Math.random() * 100 + 150))


  function animate(t) {

    elements.map((e,i) => storm(e,t-i*startpositions[i]))
    // if (y > window.innerHeight)

    // console.log(t/1000%10)

    if (t < 30000) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)

  // console.log(elements)
}


