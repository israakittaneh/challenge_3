import React from "react";

function Step2(props) {
    return (
        <div>
            <p>city: <input name="city" /></p>
            <p>state: <input name="state" /></p>
            <p>zipcode: <input name="zipcode" /></p>
            <p>Phone: <input name="Phone" value={props.getState('phone')} onChange={props.handleChange} /></p>
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}

export default Step2;