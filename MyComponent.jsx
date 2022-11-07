import MyComponent2 from "./MyComponent2";

const MyComponent = () => {
    const message = "React is interesting!!";

    return (
        <div>
            <h2>This is a new component</h2>
            <p>{message}</p>
            <MyComponent2 />
        </div>
    );
};

export default MyComponent;

/**
 *
 *
 * if creating a new component,
 *
 * 1. we should create in a new file
 *
 * 2. The name of the file and component should be same
 *
 * 3. The name of component should always start with a capital letter
 *
 *
 */
