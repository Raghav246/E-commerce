import React, { useState } from "react";
import "./App.css";
import ClassCommponent from "./ClassComponent";
import cube from "./helper";
import { square } from "./helper";
import MyComponent from "./MyComponent";
import FuncComponent from "./FuncComponent";

function App() {
    const [name, setName] = useState("Vikas");
    const [showFuncComponent, setShowFuncComponent] = useState(false);

    const changeName = () => {
        setName(name + "new");
    };

    const changeView = () => {
        setShowFuncComponent(!showFuncComponent);
    };

    console.log("parent is re-rendered");
    /* const message = () => {
        return "Welcome to Coffeee";
    };*/

    return (
        <div className='App'>
            <h1>Coffee sample app</h1>
            <button onClick={changeName}> change name </button>
            {showFuncComponent ? (
                <FuncComponent name={name} age='29' />
            ) : (
                <ClassCommponent />
            )}

            <button onClick={changeView}>Change view</button>
            {/*<>
                <MyComponent />
                <p> the cube of 15 is {cube(15)}</p>
                <div>{message()}</div>
                <h2>Welcome, {name}</h2>
                <FuncComponent name={name} age='29' />
                <FuncComponent name='Anil' age='30' />
                <FuncComponent name='Saurabh' age='28' />
            </>*/}
        </div>
    );
}

export default App;

/**
 * JSX - JavaScript and XML
 *
 * very similar to html
 *
 * It shouldnt return more than one parent component.
 *
 * If more than one component, it should be wrapped inside a component or
 * React fragment
 *
 * class --> className
 * onclick -- onClick
 * onchange -- onChange
 * event listeners will change a little
 * In JSX, any component can only return one parent element
 *
 */
