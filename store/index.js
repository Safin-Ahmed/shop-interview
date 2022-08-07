import cartReducer from "./cart";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
