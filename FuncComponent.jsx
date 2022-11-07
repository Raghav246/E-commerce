import { useState } from "react";

const FuncComponent = props => {
    const { name, age } = props;
    const [count, setCount] = useState(1);
    // creating a useState hook
    // useState hook returns an array which has the state variable
    // and a function to update it
    // it takes the default value of state var

    const increaseCount = () => {
        setCount(count + 1);
    };
    console.log("child is re-rendered");

    return (
        <div>
            <h2>This is child component. Name: {name}</h2>
            <h2>Age: is {age}</h2>
            <h2>Current count is {count}</h2>
            <button onClick={increaseCount}>Press me</button>
        </div>
    );
};

export default FuncComponent;

/**
 * Props are properties/values passed by parent component to child
 * components
 *
 * Any component cannt change its props
 *
 * if the prop of any component changes by its parent,
 *  the component will re-render
 *
 *
 */
