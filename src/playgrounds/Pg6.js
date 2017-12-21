import React, { Component } from 'react';
import _ from 'lodash'


class Playground extends Component {

  state = {
    menu: [
      { title: 'first', order: 0 },
      { title: 'second', order: 1 },
      { title: 'third', order: 2 },
      { title: 'fourth', order: 3 },
    ],
    active: 2
  }

  componentDidMount() {
    document.onkeydown = e => {
      switch (e.key) {
        case 'ArrowUp':
          this.navigate.prev()
          break;
        case 'ArrowDown':
          this.navigate.next()
          break;
        default:
          break;
      }
    }
  }

  navigate = {
    prev : () => {
      const active = this.state.active
      if (active > 0) {
        this.setState({ active: active - 1 })
      }

    },
    next : () => {
      const active = this.state.active
      const len = this.state.menu.length
      if (active < len - 1) {
        this.setState({ active: active + 1 })
      }
    }
  }


  render() {
    const menu = this.state.menu
    const upperPlaceholder = _.slice(menu, this.state.active)
    const timesPlaceholder = _.times(menu.length - this.state.active - 1)

    return (
      <div className="p6-dynamic-menu">
        <div className="p6-dynamic-menu__menu">
          {
            _.map(timesPlaceholder, (e, i) => <div key={i + 10} className="p6-dynamic-menu__item p6-dynamic-menu__placeholder">placeholder</div>)
          }
          {
            _.map(menu, (e, i) => <div className={`p6-dynamic-menu__item ${this.state.active === i ? 'active' : ''}`} onClick={() => this.setState({ active: i })} key={i}>{e.title}</div>)
          }
        </div>
        <div className="p6-dynamic-menu__line"></div>
      </div>
    );
  }
}

export default Playground;



