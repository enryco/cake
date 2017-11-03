import React, { Component } from 'react';
import canvas from './Pg1Canvas'

class Pg1 extends Component {

    componentDidMount() {
        canvas()
    }

    render() {
        return (
            <div className="Pg1">
                <p id="desc" style={{ position: "absolute", width: "100vw", textAlign: "center" }}>
                    Order and Chaos
                </p>
                <div>
                    <canvas id="c">
                    </canvas>
                </div>
            </div>
        );
    }
}

export default Pg1;



