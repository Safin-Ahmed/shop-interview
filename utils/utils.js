export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function serializeCategory(categories) {
  let parentCategory;
  let slug;
  if (
    categories[0].slug === "men" ||
    categories[0].slug === "women" ||
    categories[0].slug === "accessories"
  ) {
    parentCategory = categories[0].slug;
    slug = categories[1]?.name ? categories[1]?.name : "";
  } else {
    parentCategory = categories[1]?.slug;
    slug = categories[0].name;
  }
  return {
    parent: parentCategory,
    slug: slug.toLowerCase(),
  };
}
