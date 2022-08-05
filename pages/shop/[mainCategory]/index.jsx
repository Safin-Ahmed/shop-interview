import React from "react";
import { useRouter } from "next/router";
import { getAllCategories, getAllProducts } from "../../../api";
import Categories from "../../../components/shared/Categories";
import ProductsList from "../../../components/shared/ProductsList";
import BackButton from "../../../components/UI/BackButton";
const MainCategoryPage = ({ products, categories }) => {
  const router = useRouter();
  const parentName = router.query.mainCategory;

  const parent = categories.find((item) => item.slug === parentName);
  const finalProducts = products.filter(
    (item) => item.categories[1]?.id === parent.id
  );
  return (
    <div style={{ marginTop: "8rem" }}>
      <BackButton />
      <h1>{parent.name}</h1>
      <Categories
        categories={categories}
        parent={parent.id}
        baseUrl={`/shop/${parentName}`}
      />
      <ProductsList products={finalProducts} />
      {/* <ul>
        {finalProducts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
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
