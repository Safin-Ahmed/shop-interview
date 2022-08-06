import React from "react";
import Image from "next/image";
import Link from "next/link";
import SingleCard from "../UI/SingleCard";

const ProductCard = ({
  image,
  title,
  price,
  slug,
  categories,
  sale,
  regular,
}) => {
  const url = `shop/${
    categories[1] ? categories[1]?.name.toLowerCase() : "accessories"
  }/${categories[0].name.toLowerCase()}/${slug}`;
  return (
    <SingleCard
      image={image}
      title={title}
      price={price}
      sale={sale}
      regular={regular}
      url={url}
    />

    // <Link href={`/${url}`}>
    //   <a>
    //     <Image src={`${image.src}`} alt={title} width={280} height={274} />
    //     <h2>{title}</h2>
    //     <div>
    //       <h4>{price}</h4>
    //       {sale && <h5>{sale}</h5>}
    //     </div>
    //   </a>
    // </Link>
  );
};

export default ProductCard;