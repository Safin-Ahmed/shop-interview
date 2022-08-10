import Head from "next/head";
import { useRouter } from "next/router";
import { getAllCategories, getAllProducts } from "../../../api";
import MainCategory from "../../../components/main-category-page/MainCategory";
import { capitalizeFirstLetter } from "../../../utils/utils";

const MainCategoryPage = ({ products, categories, parent }) => {
  const router = useRouter();
  const categoryName = router.query.mainCategory;
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
      <MainCategory
        categoryName={categoryName}
        products={products}
        categories={categories}
        parent={parent}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const categoryName = params.mainCategory;
  const finalData = await getAllProducts();
  const finalCategoriesData = await getAllCategories();
  const parent = finalCategoriesData.find((item) => item.slug === categoryName);
  const finalProducts = finalData.filter(
    (item) =>
      item.categories[0]?.id === parent.id ||
      item.categories[1]?.id === parent.id
  );

  return {
    props: {
      products: finalProducts,
      categories: finalCategoriesData,
      parent,
    },
  };
}

export default MainCategoryPage;
