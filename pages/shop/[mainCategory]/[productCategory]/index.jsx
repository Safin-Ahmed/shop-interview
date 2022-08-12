import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "../../../../api";

import ProductCategory from "../../../../components/product-category-page/ProductCategory";
import Loader from "../../../../components/UI/Loader";
import { capitalizeFirstLetter } from "../../../../utils/utils";

const ProductCategoryPage = () => {
  const router = useRouter();
  const productCategory = router.query.productCategory?.toLowerCase();
  const mainCategory = router.query.mainCategory;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!mainCategory || !productCategory) {
      return;
    }
    const setData = async () => {
      setLoading(true);
      const mainParent = await getCategoryBySlug(mainCategory);
      const productCategories = await getAllCategories(mainParent[0].id);
      const categoryId = productCategories.find(
        (item) => item.name.toLowerCase() === productCategory
      ).id;

      const finalproducts = await getProductsByCategory(categoryId);
      setProducts(finalproducts);
      setLoading(false);
    };
    setData();
  }, [mainCategory, productCategory]);
  if (mainCategory && productCategory) {
    return (
      <>
        <Head>
          <title>
            Interview Shop - {capitalizeFirstLetter(productCategory)}
          </title>
        </Head>
        {loading && <Loader />}
        <ProductCategory products={products} />
      </>
    );
  }
};

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const productCategory = params.productCategory.toLowerCase(); // hoodies
//   const mainCategory = params.mainCategory; // women || men
//   const mainParent = await getCategoryBySlug(mainCategory);
//   const productCategories = await getAllCategories(mainParent[0].id);
//   const categoryId = productCategories.find(
//     (item) => item.name.toLowerCase() === productCategory
//   ).id;

//   const finalproducts = await getProductsByCategory(categoryId);

//   return {
//     props: {
//       products: finalproducts,
//     },
//   };
// }

export default ProductCategoryPage;
