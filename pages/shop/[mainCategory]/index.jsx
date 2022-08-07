import { getAllCategories, getAllProducts } from "../../../api";
import MainCategory from "../../../components/main-category-page/MainCategory";

const MainCategoryPage = ({ products, categories }) => {
  return <MainCategory products={products} categories={categories} />;
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
      { params: { mainCategory: "accessories" } },
    ],
    fallback: true,
  };
}

export default MainCategoryPage;
