import Head from "next/head";
import { getAllCategories, getAllProducts } from "../../api";
import Shop from "../../components/shop-page/Shop";

const ShopPage = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop Page"></meta>
      </Head>
      <Shop products={products} categories={categories} />
    </>
  );
};

export async function getServerSideProps(context) {
  // const finalData = await getAllProducts();
  // const finalCategoriesData = await getAllCategories();
  const productResponse = await fetch("/api/products");
  const categoryResponse = await fetch("/api/categories");
  const productData = await productResponse.json();
  const categorydata = await categoryResponse.json();

  return {
    props: {
      products: productData,
      categories: categorydata,
    },
  };
}

export default ShopPage;
