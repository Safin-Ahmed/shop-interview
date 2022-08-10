import React from "react";
import BtnGroup from "../UI/BtnGroup";

const Categories = ({ categories, parent, baseUrl }) => {
  const filteredCategories = categories.filter(
    (item) => item.parent === parent && item.name !== "Uncategorized"
  );
  return (
    <div>
      <BtnGroup categories={filteredCategories} baseUrl={baseUrl} />
    </div>
  );
};

export default Categories;
