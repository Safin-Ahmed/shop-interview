import Head from "next/head";
import { useRouter } from "next/router";
import { getAllCategories, getProductsByCategory } from "../../../api";
import MainCategory from "../../../components/main-category-page/MainCategory";
import { capitalizeFirstLetter } from "../../../utils/utils";

const MainCategoryPage = ({ products, categories, parent, categoryName }) => {
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
  const categoriesData = await getAllCategories();
  const parent = categoriesData.find((item) => item.slug === categoryName);
  const finalProducts = await getProductsByCategory(parent.id);
  const finalCategories = await getAllCategories(parent.id);

  return {
    props: {
      products: finalProducts,
      categories: finalCategories,
      parent,
      categoryName,
    },
  };
}

export default MainCategoryPage;
