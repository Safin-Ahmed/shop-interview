import React from "react";

const TestProduct = ({ product, relatedProducts }) => {
  console.log("Test Product");
  return (
    <div>
      <h1>This is product page for {product.name}</h1>
    </div>
  );
};

export default TestProduct;
