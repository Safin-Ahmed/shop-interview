import React from "react";
import BtnGroup from "../UI/BtnGroup";

const Categories = ({ categories, parent, baseUrl }) => {
  const filteredCategories = categories.filter(
    (item) => item.parent === parent && item.name !== "Uncategorized"
  );
  return (
    <div>
      <BtnGroup categories={filteredCategories} baseUrl={baseUrl} />
      {/* <ul>
        {filteredCategories.map((item) => (
          <Link key={item.id} href={`${baseUrl}/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </ul> */}
    </div>
  );
};

export default Categories;
