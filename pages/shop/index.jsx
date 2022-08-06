import React, { useEffect } from "react";
import Link from "next/link";
import { getProductsData } from "../../store/products-actions";
import { useDispatch } from "react-redux";
import { getAllCategories, getAllProducts } from "../../api";
import Categories from "../../components/shared/Categories";
import { Container } from "@mui/material";
import classes from "./shop.module.css";
import ProductsList from "../../components/shared/ProductsList";

const ShopPage = ({ products, categories, url, setUrl }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);
  return (
    <section className={classes.shopPage}>
      <Container maxWidth="lg">
        <div className={classes.shopPage__title}>Shop</div>
        <Categories categories={categories} parent={0} baseUrl={"/shop"} />
        <ProductsList products={products} />
      </Container>
    </section>
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
