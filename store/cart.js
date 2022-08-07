import { createSlice } from "@reduxjs/toolkit";
const initialCartSlice = {
  counter: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartSlice,
  reducers: {
    addItem(state, action) {
      const product = state.items.find(
        (item) => item.product_id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity
          ? +action.payload.quantity
          : 1;
        product.totalPrice = +(product.price * product.quantity).toFixed(2);
      } else {
        const quantity = action.payload.quantity ? +action.payload.quantity : 1;
        const price = +action.payload.price;
        state.items.push({
          product_id: action.payload.id,
          product_name: action.payload.name,
          product_image: action.payload.image,
          quantity: action.payload.quantity ? +action.payload.quantity : 1,
          price: +action.payload.price,
          totalPrice: +(quantity * price).toFixed(2),
        });
      }

      state.counter += action.payload.quantity ? +action.payload.quantity : 1;
    },

    removeItem(state, action) {
      const product = state.items.find(
        (item) => item.product_id === action.payload.id
      );
      if (product.quantity > 1) {
        product.quantity--;
        product.totalPrice = +(product.totalPrice - product.price).toFixed(2);
      } else {
        state.items = state.items.filter(
          (item) => item.product_id !== action.payload.id
        );
      }

      state.counter -= 1;
    },

    deleteItem(state, action) {
      const product = state.items.find(
        (item) => item.product_id === action.payload.id
      );
      state.counter -= product.quantity;
      state.items = state.items.filter(
        (item) => item.product_id !== action.payload.id
      );
    },

    clearCart(state) {
      state.counter = 0;
      state.items = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
