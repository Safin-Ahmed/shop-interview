import cartReducer from "./cart";
import productsReducer from "./products";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
