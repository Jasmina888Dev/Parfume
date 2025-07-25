import React, { useState } from "react";
import "./password.scss";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const nav = useNavigate();

  function addClick() {
    if (name === "admin" && login === "123456") {
      nav("/admin");
    } else {
      alert(404);
    }
    setLogin("");
    setName("");
  }

  return (
    <div id="password">
      <div className="container">
        <div className="password">
          <h1>LOG IN AS A SELLER</h1>
          <div className="password--block">
            <h3>USERNAME</h3>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <h3>PASSWORD</h3>
            <input
              type="password"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
            />
            <button onClick={() => addClick()}>LOG IN AS A SELLER</button>
          </div>
          <div className="password--text">
            <h2>LOG IN AS A SELLER</h2>
            <h3>Log In as a User and start shopping!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
