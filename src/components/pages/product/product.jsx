import React from "react";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { addBasket, addFavorite } from "../../redux/productSlice";

const Product = () => {
  const { product, favorites } = useSelector((s) => s.todoRed);
  const dispatch = useDispatch();

  return (
    <div id="product">
      <div className="container">
        <div className="product">
          <div className="product--block1">
            <div className="product--block1__text1">
              <h1>CATEGORY</h1>
              <ul>
                <li>MALE PERFUMES</li>
                <li>FEMALE PERFUMES</li>
                <li>UNISEX</li>
              </ul>
            </div>
            <div className="product--block1__text1">
              <h1>PRICE</h1>
              <input type="range" />
              <div className="product--block1__text1--filter">
                <h4>Price:0-25.000</h4>
                <h2>filter</h2>
              </div>
            </div>
            <div className="product--block1__text1">
              <h1>BRAND</h1>
              <ul>
                <li>DIOR</li>
                <li>VERSACE</li>
                <li>PRADA</li>
                <li>TOM FORD</li>
              </ul>
            </div>
            <div className="product--block1__text1">
              <h1>TYPE</h1>
              <ul>
                <li>ELIXIR</li>
                <li>COLOGNE</li>
                <li>PERFUME</li>
                <li>EAU DE TOILETTE</li>
              </ul>
            </div>
          </div>

          <div className="product--block2">
            {product.map((el) => {
              const isFav = favorites.some((item) => item.id === el.id);

              return (
                <div className="product--block2__card" key={el.id}>
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

                  <img src={el.image} alt="img" width={200} />
                  <h2>{el.name}</h2>
                  <h3>{el.price}$</h3>
                  <button onClick={() => dispatch(addBasket(el))}>
                    ADD TO BASKET
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
