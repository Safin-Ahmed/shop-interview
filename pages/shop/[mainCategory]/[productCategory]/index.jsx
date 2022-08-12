import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { getAllCategories, getProductsByCategory } from "../../../../api";

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
  const productCategory = params.productCategory.toLowerCase(); // hoodies
  const mainCategory = params.mainCategory; // women || men
  const allCategories = await getAllCategories();
  const mainParent = allCategories.find((item) => item.slug === mainCategory);
  const productCategories = await getAllCategories(mainParent.id);
  const categoryId = productCategories.find(
    (item) => item.name.toLowerCase() === productCategory
  ).id;

  const finalproducts = await getProductsByCategory(categoryId);

  return {
    props: {
      products: finalproducts,
    },
  };
}

export default ProductCategoryPage;
