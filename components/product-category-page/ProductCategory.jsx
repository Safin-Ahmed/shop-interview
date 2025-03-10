import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ProductsList from "../shared/ProductsList";
import BackButton from "../UI/BackButton";

const ProductCategory = ({ products }) => {
  const router = useRouter();
  return (
    <section style={{ marginTop: "8rem" }}>
      <Container maxWidth="lg">
        <BackButton />
        <h2>
          {" "}
          {router.asPath.split("/")[2].toUpperCase()} |{" "}
          {router.query.productCategory.toUpperCase()}
        </h2>
        <ProductsList products={products} />
      </Container>
    </section>
  );
};

export default ProductCategory;
