import React from "react";
import "./header.scss";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img
            src="https://www.fragrantica.com/mdimg/dizajneri/o.4748.jpg"
            alt=""
            width={110}
            onClick={() => nav("/")}
          />
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/about"}>About</Link>
          </div>
          <div className="header--icons">
            <Link to={"/password"}>
              <FiUser />
            </Link>
            <Link to={"/favorite"}>
              <IoMdHeartEmpty />
            </Link>
            <Link to={"/basket"}>
              <SlBasket />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
