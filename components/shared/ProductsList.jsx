import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <ul>
      {products.map((item) => {
        if (item) {
          return (
            <ProductCard
              key={item?.id}
              title={item?.name}
              price={item?.price}
              sale={item?.sale_price}
              image={item?.images[0]}
              slug={item?.slug}
              categories={item?.categories}
            />
          );
        }
      })}
    </ul>
  );
};

export default ProductsList;
