import React from "react";

const ShopList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
