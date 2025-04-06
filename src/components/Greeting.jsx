import React from "react";

function Greetings({name}) {
    return (
        <div>
            <h2>Hello {name}, from the Greeting Component!</h2>
            <p>This is my first custom component in React.</p>
        </div>
    );
}
export default Greetings;
