import React from "react";
import "./home.scss";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const { product } = useSelector((s) => s.todoRed);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <a>
            <IoIosArrowBack />
          </a>
          <div className="home--block">
            {product.map((el) => (
              <div className="home--block__img">
                <img src={el.image} alt="img" />
                <h3>{el.name}</h3>
              </div>
            ))}
          </div>
          <a>
            <IoIosArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
