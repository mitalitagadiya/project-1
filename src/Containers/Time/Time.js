import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);

        // 1. Used to set intial value to the component.

        this.state = {
            Time: new Date()
        }
    }

    tick = () => {
        this.setState({
            Time: new Date()
        })
    }

    componentDidMount = () => {

        // 3. Used to request date from server.

        this.TimeI = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = (PrevProps, PrevState) => {

        // 4. called whenever particular state/props update.

        if (this.state.Time !== PrevState.Time) {
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount = () => {

        // 5. called whenever we move to another component (used to realise the resource).

        clearInterval(this.TimeI);
    }

    // 2. called whenever state value changed.

    render() {
        return (
            <div>
                <p>{this.state.Time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;