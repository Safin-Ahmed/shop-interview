import {
  getAllProducts,
  getProductBySlug,
  getRelatedProductsByIds,
} from "../../../../../api";
import Product from "../../../../../components/product-page/Product";

const SingleProductPage = ({ product, relatedProducts }) => {
  if (product && relatedProducts) {
    return <Product product={product} relatedProducts={relatedProducts} />;
  }
};

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.productSlug;
  const product = await getProductBySlug(slug);
  console.log(product);
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

export async function getStaticPaths(context) {
  const allProducts = await getAllProducts();
  const slugs = allProducts.map((product) => {
    let parentCategory;
    let slug;
    let productSlug;
    if (
      product.categories[0].slug === "men" ||
      product.categories[0].slug === "women" ||
      product.categories[0].slug === "accessories"
    ) {
      parentCategory = product.categories[0].slug;
      slug = product.categories[1]?.name ? product.categories[1]?.name : "";
    } else {
      parentCategory = product.categories[1]?.slug;
      slug = product.categories[0].name;
    }
    return {
      parentCategory: parentCategory,
      productCategory: slug.toLowerCase(),
      productSlug: product.slug,
    };
  });

  const params = slugs.map((slug) => ({
    params: {
      mainCategory: slug.parentCategory,
      productCategory: slug.productCategory,
      productSlug: slug.productSlug,
    },
  }));

  console.log(params);

  return {
    paths: params,
    fallback: true,
  };
}

export default SingleProductPage;
