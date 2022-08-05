import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import { getAllProducts } from "../../../../api";
import ProductsList from "../../../../components/shared/ProductsList";
import BackButton from "../../../../components/UI/BackButton";

const ProductCategoryPage = ({ products }) => {
  const router = useRouter();

  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <div style={{ marginTop: "8rem" }}>
      {products.length === 0 && <h1>No Product Found </h1>}
      <BackButton />
      <h2>
        {" "}
        {router.asPath.split("/")[2].toUpperCase()} |{" "}
        {router.query.productCategory.toUpperCase()}
      </h2>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const productSlug = params.productCategory;
  const finalData = await getAllProducts();
  const finalProducts = finalData.filter(
    (item) => item.categories[0].slug === productSlug
  );

  return {
    props: {
      products: finalProducts,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default ProductCategoryPage;
