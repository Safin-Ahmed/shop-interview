import React, { useEffect } from "react";
import Link from "next/link";
import { getProductsData } from "../../store/products-actions";
import { useDispatch } from "react-redux";
import { getAllCategories, getAllProducts } from "../../api";
import ShopList from "../../components/shop-page/ShopList";
import Categories from "../../components/shared/Categories";

const ShopPage = ({ products, categories, url, setUrl }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);
  return (
    <>
      <div style={{ marginTop: "8rem" }}>Shop</div>
      <Categories categories={categories} parent={0} baseUrl={"/shop"} />
      <ShopList products={products} />
    </>
  );
};

export async function getStaticProps(context) {
  const finalData = await getAllProducts();
  const finalCategoriesData = await getAllCategories();

  return {
    props: {
      products: finalData,
      categories: finalCategoriesData,
    },
  };
}

export default ShopPage;
