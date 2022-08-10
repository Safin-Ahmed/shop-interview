let allProducts = [];
let allCategories = [];

export const getAllProducts = async () => {
  if (allProducts.length > 0) {
    return allProducts;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`
  );
  const data = await response.json();
  allProducts = [...data];
  return data;
};

export const getAllCategories = async () => {
  if (allCategories.length > 0) {
    return allCategories;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/categories`
  );
  const data = await response.json();

  allCategories = [...data];

  return data;
};

export const getProductBySlug = async (slug) => {
  const allProducts = await getAllProducts();
  const product = allProducts.find((item) => item.slug === slug);

  return product;
};

export const getRelatedProductsByIds = async (ids) => {
  const allProducts = await getAllProducts();
  const relatedProducts = ids.map((id) => {
    const product = allProducts.find((item) => item.id === id);
    if (!product) {
      return null;
    }
    return product;
  });

  return relatedProducts;
};
