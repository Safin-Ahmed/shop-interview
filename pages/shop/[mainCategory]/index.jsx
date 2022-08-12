import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getAllCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "../../../api";
import MainCategory from "../../../components/main-category-page/MainCategory";
import Loader from "../../../components/UI/Loader";
import { capitalizeFirstLetter } from "../../../utils/utils";

const MainCategoryPage = () => {
  const router = useRouter();
  const categoryName = router.query.mainCategory;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!categoryName) {
      return;
    }
    const setData = async () => {
      setIsLoading(true);
      const parent = await getCategoryBySlug(categoryName);
      const products = await getProductsByCategory(parent[0].id);
      const categories = await getAllCategories(parent[0].id);
      setProducts(products);
      setCategories(categories);
      setIsLoading(false);
    };
    if (categoryName) {
      setData();
    }
  }, [categoryName]);
  if (categoryName) {
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
        {isLoading && <Loader />}
        <MainCategory
          categoryName={categoryName}
          products={products}
          categories={categories}
          parent={parent}
        />
      </>
    );
  }
};

export default MainCategoryPage;
