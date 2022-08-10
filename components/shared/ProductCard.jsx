import React from "react";
import SingleCard from "../UI/SingleCard";
import { serializeCategory } from "../../utils/utils";

const ProductCard = ({
  image,
  title,
  price,
  slug,
  categories,
  sale,
  regular,
}) => {
  const { parent, slug: productCategory } = serializeCategory(categories);
  const url = `shop/${parent}/${productCategory}/${slug}`;
  return (
    <SingleCard
      image={image}
      title={title}
      price={price}
      sale={sale}
      regular={regular}
      url={url}
    />
  );
};

export default ProductCard;
