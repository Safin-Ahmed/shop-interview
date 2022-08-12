let allProducts = [];

export const getAllProducts = async () => {
  if (allProducts.length > 0) {
    return allProducts;
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL}/api/products`
  );
  const data = await response.json();
  allProducts = [...data];
  return data;
};

export const getAllCategories = async (parentId = null) => {
  let response;
  if (parentId || parentId === 0) {
    response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      }/api/categories?parent=${parentId}`
    );
  } else {
    response = await fetch(
      `${
        process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
      }/api/categories`
    );
  }
  const data = await response.json();

  return data;
};

export const getCategoryBySlug = async (slug) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    }/api/categories?slug=${slug}`
  );
  const data = await response.json();
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

export const getProductsByCategory = async (categoryId) => {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
    }/api/products?category=${categoryId}`
  );

  const data = response.json();

  return data;
};
