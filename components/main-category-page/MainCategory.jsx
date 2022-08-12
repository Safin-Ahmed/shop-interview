import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import BackButton from "../UI/BackButton";
import Categories from "../shared/Categories";
import ProductsList from "../shared/ProductsList";

const MainCategory = ({ products, categories, categoryName, parent }) => {
  return (
    <section style={{ marginTop: "7rem", paddingBottom: "5rem" }}>
      <Container maxWidth="lg">
        <BackButton />
        <h1 style={{ textAlign: "center", fontSize: "48px" }}>{parent.name}</h1>
        <Categories categories={categories} baseUrl={`/shop/${categoryName}`} />
        <ProductsList products={products} />
      </Container>
    </section>
  );
};

export default MainCategory;
