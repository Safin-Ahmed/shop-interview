import { getAllProducts } from "../api";
import { productsActions } from "./products";

export const getProductsData = () => {
  return async (dispatch) => {
    const finalData = await getAllProducts();
    dispatch(productsActions.replaceProducts(finalData));
  };
};
