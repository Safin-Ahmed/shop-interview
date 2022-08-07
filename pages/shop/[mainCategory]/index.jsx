import Head from "next/head";
import { useRouter } from "next/router";
import { getAllCategories, getAllProducts } from "../../../api";
import MainCategory from "../../../components/main-category-page/MainCategory";
import { capitalizeFirstLetter } from "../../../utils/utils";

const MainCategoryPage = ({ products, categories }) => {
  const router = useRouter();
  const categoryName = router.query.mainCategory;
  if (!products) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Head>
        <title>Shop - {capitalizeFirstLetter(categoryName)}</title>
        <meta
          name="description"
          content={`Collection of all products under ${capitalizeFirstLetter(
            categoryName
          )}'s category`}
        ></meta>
      </Head>
      <MainCategory products={products} categories={categories} />
    </>
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
    revalidate: 1800,
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
