import { getAllCategories, getAllProducts } from "../../api";
import Shop from "../../components/shop-page/Shop";

const ShopPage = ({ products, categories }) => {
  return <Shop products={products} categories={categories} />;
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

export default ShopPage;
