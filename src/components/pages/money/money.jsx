import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./money.scss";
import { useNavigate } from "react-router-dom";

const Money = () => {
  const { basket } = useSelector((s) => s.todoRed);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [card1, setCard1] = useState("");
  const [card2, setCard2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !card1 || !card2) {
      alert("404 - All fields must be filled!");
    } else if (!emailRegex.test(email)) {
      alert("404 - email format!");
    } else {
      alert("Success!");
      nav("/thank");
    }
  };

  return (
    <div id="money">
      <div className="container">
        <div className="money">
          <div className="money--block1">
            {basket.map((el) => (
              <div className="money--block1__card" key={el.id}>
                <div className="money--block1__card--name">
                  <img src={el.image} alt="img" />
                  <h1>{el.name}</h1>
                </div>
                <h2>{el.price}$</h2>
              </div>
            ))}
          </div>
          <div className="block2">
            <h1>PAYMENT DETAILS</h1>
            <div className="money--block2">
              <div className="money--block2__inputs">
                <div className="money--block2__inputs--input">
                  <h3>Full Name:</h3>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="money--block2__inputs--input">
                  <h3>E-mail address: </h3>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="money--block2__inputs--input">
                  <h3>Card Details</h3>
                  <input
                    type="text"
                    value={card1}
                    onChange={(e) => setCard1(e.target.value)}
                  />
                </div>
                <div className="money--block2__inputs--input">
                  <h3>Card Details</h3>
                  <input
                    type="text"
                    value={card2}
                    onChange={(e) => setCard2(e.target.value)}
                  />
                </div>
              </div>

              <div className="money--block2__total">
                <h2>Shipping Method</h2>
                <div className="money--block2__total--box">
                  <div className="money--block2__total--box__puck">
                    <input type="checkbox" />
                    <h3>
                      Pick up in Post Office <span>FREE</span>
                    </h3>
                  </div>
                  <div className="money--block2__total--box__puck">
                    <input type="checkbox" />
                    <h3>
                      At Home Delivery <span>10$</span>
                    </h3>
                  </div>
                </div>
                <div className="money--block2__total--card1">
                  <div className="money--block2__total--card1__text">
                    <h3>Subtotal</h3>
                    <h3>10.800ден</h3>
                  </div>
                  <div className="money--block2__total--card1__text">
                    <h3>Shipping</h3>
                    <h3>0ден</h3>
                  </div>
                  <div className="money--block2__total--card1__text">
                    <h2>Total</h2>
                    <h3>10.800ден</h3>
                  </div>
                </div>
                <button onClick={handleSubmit}>PAY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Money;
