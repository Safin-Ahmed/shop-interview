import Head from "next/head";
import { getProductBySlug, getRelatedProductsByIds } from "../../../../../api";
import Product from "../../../../../components/product-page/Product";

const SingleProductPage = ({ product, relatedProducts }) => {
  if (product && relatedProducts) {
    return (
      <>
        <Head>
          <title>Interview Shop: {product.name}</title>
          <meta name="description" content={product.short_description}></meta>
        </Head>
        <Product product={product} relatedProducts={relatedProducts} />
      </>
    );
  }
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.productSlug;
  const product = await getProductBySlug(slug);
  const relatedProducts = await getRelatedProductsByIds(product.related_ids);
  if (!relatedProducts) {
    return {
      props: {
        product,
      },
    };
  } else {
    return {
      props: {
        product,
        relatedProducts,
      },
    };
  }
}

export default SingleProductPage;
