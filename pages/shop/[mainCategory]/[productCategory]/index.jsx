import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { getAllProducts } from "../../../../api";

import ProductCategory from "../../../../components/product-category-page/ProductCategory";
import { capitalizeFirstLetter } from "../../../../utils/utils";

const ProductCategoryPage = ({ products }) => {
  const router = useRouter();
  const productCategory = router.query.productCategory;
  return (
    <>
      <Head>
        <title>Interview Shop - {capitalizeFirstLetter(productCategory)}</title>
      </Head>
      <ProductCategory products={products} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const productCategory = params.productCategory.toLowerCase();
  const mainCategory = params.mainCategory;

  const finalData = await getAllProducts();
  const finalProducts = finalData.filter((product) => {
    let parentCategory;
    let slug;
    if (
      product.categories[0].slug === "men" ||
      product.categories[0].slug === "women" ||
      product.categories[0].slug === "accessories"
    ) {
      parentCategory = product.categories[0].slug;
      slug = product.categories[1]?.name ? product.categories[1]?.name : "";
    } else {
      parentCategory = product.categories[1]?.slug;
      slug = product.categories[0].name;
    }

    return (
      parentCategory === mainCategory && slug.toLowerCase() === productCategory
    );
  });

  return {
    props: {
      products: finalProducts,
    },
  };
}

export default ProductCategoryPage;
