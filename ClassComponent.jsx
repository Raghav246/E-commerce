import React from "react";

class ClassCommponent extends React.Component {
    constructor(props) {
        //1
        super(props);
        console.log("constructor is printed");
        this.state = { count: 1 };
        // inherit parent props and set initial state
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    static getDerivedStateFromProps() {
        //2
        console.log("getDerivedStateFromProps is printed");
        return 10;
        // if we want to pass something to render function
    }

    componentDidMount() {
        //4
        console.log("componentDidMount is printed");
        // this is called when the component has mounted
        // eg starting a timer
        // api calls
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is printed");
        // this is called when the component has re-rendered
        // eg starting a timer
        // api calls
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate is printed");
        return true;
        // whether a comp should re-render or not. returns true/false
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate is printed");
        return null;
        // used for comparing the old and new values after update
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is printed");
        // called before unmounting of a comp

        // clear all timers, event listeners
    }

    render() {
        //3
        // actually printing the jsx
        console.log("render is printed");
        return (
            <div>
                <h1>This is a class component</h1>
                <h2>Current count: {this.state.count}</h2>
                <button onClick={this.changeCount}>Change count</button>
            </div>
        );
    }
}

export default ClassCommponent;
