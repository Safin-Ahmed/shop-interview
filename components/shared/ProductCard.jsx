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
