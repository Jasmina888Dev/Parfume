import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const TodoSlice = createSlice({
  name: "CREATE_PRODUCT",
  initialState,
  reducers: {
    addTask(state, action) {
      let result = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(result));
      state.product = result;
    },
    addBasket(state, action) {
      const existingProduct = state.basket.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        state.basket = updatedBasket;
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
      } else {
        const newItem = { ...action.payload, count: 1 };
        const updatedBasket = [...state.basket, newItem];
        state.basket = updatedBasket;
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
      }
    },
    incrementCount(state, action) {
      const updatedBasket = state.basket.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
      state.basket = updatedBasket;
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    },
    decrementCount(state, action) {
      const updatedBasket = state.basket
        .map((item) =>
          item.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0);
      state.basket = updatedBasket;
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
    },
    addFavorite(state, action) {
      const item = action.payload;
      const exists = state.favorites.find((el) => el.id === item.id);

      if (exists) {
        const updatedFavs = state.favorites.filter((el) => el.id !== item.id);
        state.favorites = updatedFavs;
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      } else {
        const updatedFavs = [...state.favorites, item];
        state.favorites = updatedFavs;
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      }
    },
  },
});

export const { addTask, addBasket, incrementCount, decrementCount, addFavorite } =
  TodoSlice.actions;
export default TodoSlice.reducer;
