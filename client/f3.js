import React from "react";

function Step3(props) {
    return (
        <div>
            <p>credit card: <input name="creditcard" /></p>
            <p>expiry date: <input name="expirydate" /></p>
            <p>CVV: <input name="CVV" /></p>
            <p>billing zip code: <input name="billingzipcode" /></p>
            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
}

export default Step2;