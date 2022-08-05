import { createSlice } from "@reduxjs/toolkit";
const initialProductsState = {
  products: ["Product1", "Product2", "Product3"],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    replaceProducts(state, action) {
      console.log(action.payload);
      state.products = [...action.payload];
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
