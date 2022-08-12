import React from "react";
import BtnGroup from "../UI/BtnGroup";

const Categories = ({ categories, baseUrl }) => {
  return (
    <div>
      <BtnGroup categories={categories} baseUrl={baseUrl} />
    </div>
  );
};

export default Categories;
