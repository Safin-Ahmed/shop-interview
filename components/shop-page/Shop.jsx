import { Container } from "@mui/material";
import React from "react";
import Categories from "../shared/Categories";
import ProductsList from "../shared/ProductsList";
import classes from "./shop.module.css";

const Shop = ({ products, categories }) => {
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

export default Shop;
