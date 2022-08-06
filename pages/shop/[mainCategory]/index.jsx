import React from "react";
import { useRouter } from "next/router";
import { getAllCategories, getAllProducts } from "../../../api";
import Categories from "../../../components/shared/Categories";
import ProductsList from "../../../components/shared/ProductsList";
import BackButton from "../../../components/UI/BackButton";
import { Container } from "@mui/material";
const MainCategoryPage = ({ products, categories }) => {
  const router = useRouter();
  const parentName = router.query.mainCategory;

  const parent = categories.find((item) => item.slug === parentName);
  const finalProducts = products.filter(
    (item) =>
      item.categories[0]?.id === parent.id ||
      item.categories[1]?.id === parent.id
  );

  console.log("Final Products: ", finalProducts);
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

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { mainCategory: "men" } },
      { params: { mainCategory: "women" } },
    ],
    fallback: true,
  };
}

export default MainCategoryPage;
