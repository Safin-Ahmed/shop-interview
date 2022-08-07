import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import BackButton from "../UI/BackButton";
import Categories from "../shared/Categories";
import ProductsList from "../shared/ProductsList";

const MainCategory = ({ products, categories }) => {
  const router = useRouter();
  const parentName = router.query.mainCategory;

  const parent = categories.find((item) => item.slug === parentName);
  const finalProducts = products.filter(
    (item) =>
      item.categories[0]?.id === parent.id ||
      item.categories[1]?.id === parent.id
  );

  return (
    <section style={{ marginTop: "8rem" }}>
      <Container maxWidth="lg">
        <BackButton />
        <h1 style={{ textAlign: "center", fontSize: "48px" }}>{parent.name}</h1>
        <Categories
          categories={categories}
          parent={parent.id}
          baseUrl={`/shop/${parentName}`}
        />
        <ProductsList products={finalProducts} />
      </Container>
    </section>
  );
};

export default MainCategory;
