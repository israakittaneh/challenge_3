import React from "react";

function Step1(props) {
    return (
        <div>
            <p>Name: <input name="name" type="text" value={props.getState('name')} onChange={props.handleChange} /></p>
            <p>email: <input name="email" type="email" value={props.getState('email')} onChange={props.handleChange} /></p>
            <p>password: <input name="password" type="password" value={props.getState('password')} onChange={props.handleChange} /></p>
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}

export default Step1;