import React from "react";
import { useSelector } from "react-redux";
import "./favorite.scss";

const Favorite = () => {
  const { favorites } = useSelector((s) => s.todoRed);
  return (
    <div id="favorite">
      <div className="container">
        <h1>Your favorite parfumes :</h1>
        <div className="favorite">
          {favorites.map((el) => (
            <div className="favorite--card">
              <img src={el.image} alt="imd" />
              <h3>{el.name}</h3>
              <h2>{el.price}$</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
