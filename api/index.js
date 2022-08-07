export const getAllProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  const finalData = data.map((item) => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    short_description: item.short_description,
    price: item.price,
    regular_price: item.regular_price,
    sale_price: item.sale_price,
    categories: item.categories,
    images: item.images,
    attributes: item.attributes,
    variations: item.variations,
    related_ids: item.related_ids,
  }));

  return finalData;
};

export const getAllCategories = async () => {
  const response = await fetch("http://localhost:3000/api/categories");
  const data = await response.json();
  const finalData = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      count: item.count,
      parent: item.parent,
    };
  });

  return finalData;
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

export const getParentCategories = async () => {
  const allCategories = await getAllCategories();
  const parentCategories = allCategories.filter(
    (item) => item.parent === 0 && item.name !== "Uncategorized"
  );
};
