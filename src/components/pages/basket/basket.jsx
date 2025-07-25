import React from "react";
import "./basket.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addFavorite,
  decrementCount,
  incrementCount,
} from "../../redux/productSlice";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const Basket = () => {
  const { basket, favorites } = useSelector((s) => s.todoRed);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const totalAmount = basket.reduce((acc, el) => acc + el.price * el.count, 0);

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block1">
            <h1>PRODUCT</h1>
            <h1>QUANTITY</h1>
            <h1>PRICE</h1>
          </div>

          {basket.map((el) => {
            const isFav = favorites.some((item) => item.id === el.id);

            return (
              <div className="basket--block2" key={el.id}>
                <div className="basket--block2__name">
                  <img src={el.image} alt="img" />
                  <h2>{el.name}</h2>
                </div>

                <div className="basket--block2__count">
                  <button onClick={() => dispatch(decrementCount(el.id))}>
                    -
                  </button>
                  <h1>{el.count}</h1>
                  <button onClick={() => dispatch(incrementCount(el.id))}>
                    +
                  </button>
                </div>

                {/* ЖҮРӨКЧӨ ТҮЙМӨСҮ */}
                <a
                  onClick={() => dispatch(addFavorite(el))}
                  className="heart-btn"
                >
                  {isFav ? (
                    <MdFavorite style={{ color: "red" }} />
                  ) : (
                    <MdFavoriteBorder style={{ color: "gray" }} />
                  )}
                </a>

                <h3>{el.price * el.count}$</h3>
              </div>
            );
          })}

          <div className="basket--block3">
            <button onClick={() => nav("/")}>CONTINUE SHOPPING</button>
            <button onClick={() => nav("/money")}>PROCEED TO CHECKOUT</button>
          </div>

          <div className="basket--total">
            <h2>Total: {totalAmount}$</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
