import React from "react";
import "./thank.scss";
import sacces from "../../../assets/success.svg";

const Thank = () => {
  return (
    <div id="thank">
      <div className="container">
        <div className="thank">
          <img src={sacces} alt="img" width={300} />
          <h1>Your order has been made!</h1>
          <p>
            Thank you for your payment. An automated payment <br /> reciept will
            be sent to your registered email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thank;
