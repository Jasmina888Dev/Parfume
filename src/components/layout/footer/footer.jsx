import React from "react";
import "./footer.scss";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--block1">
            <h3>OFFERS AND TRENDS</h3>
            <h2>Newsletter Application</h2>
            <p>
              Enter your email address and let us notify you <br />
              about news and discounts...
            </p>
            <div className="footer--block1__input">
              <input type="text" />
              <button>SIGN UP</button>
            </div>
          </div>
          <div className="footer--block2">
            <h3>STAY UP TO DATE</h3>
            <h2>Follow Us</h2>
            <p>
              Become part of our friends on social networks and <br /> find out
              first about the discounts and novelties that <br /> we announce...
            </p>
            <div className="footer--block2__icons">
              <a>
                <RxInstagramLogo />
              </a>
              <a>
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
