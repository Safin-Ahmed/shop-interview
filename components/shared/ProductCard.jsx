import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, title, price, slug, categories, sale }) => {
  const url = `shop/${categories[1]?.name.toLowerCase()}/${categories[0].name.toLowerCase()}/${slug}`;
  return (
    <Link href={`/${url}`}>
      <a>
        <Image src={`${image.src}`} alt={title} width={280} height={274} />
        <h2>{title}</h2>
        <div>
          <h4>{price}</h4>
          {sale && <h5>{sale}</h5>}
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
