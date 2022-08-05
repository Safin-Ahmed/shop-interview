import Link from "next/link";
import React from "react";

const Categories = ({ categories, parent, baseUrl }) => {
  const filteredCategories = categories.filter(
    (item) => item.parent === parent && item.name !== "Uncategorized"
  );
  return (
    <div>
      <ul>
        {filteredCategories.map((item) => (
          <Link key={item.id} href={`${baseUrl}/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
