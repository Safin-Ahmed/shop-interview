import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { getProductBySlug, getRelatedProductsByIds } from "../../../../../api";
import Image from "next/image";
import ProductsList from "../../../../../components/shared/ProductsList";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import Quantity from "../../../../../components/UI/Quantity";

const SingleProductPage = ({ product, relatedProducts }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const productSlug = router.query.productSlug;
  const path = router.asPath.split("/");
  const finalPath = `${path[1]} / ${path[2]} / ${path[3]}`;
  const quantityRef = useRef(1);
  const [value, setValue] = useState(1);
  const handleAddToCart = () => {
    const data = {
      id: product.id,
      name: product.name,
      image: product.images[0].src,
      quantity: quantityRef.current.value,
      price: product.price,
    };

    dispatch(cartActions.addItem(data));
    setValue(1);
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="product">
        <div className="product__image">
          <Image
            src={`${product.images[0].src}`}
            alt={product.slug}
            width={580}
            height={580}
          />
        </div>
        <div className="product__details">
          <p>{finalPath}</p>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.short_description.slice(3, -5)}</p>

          <div className="product__add-to-cart">
            <Quantity value={value} setValue={setValue} ref={quantityRef} />
            <button onClick={handleAddToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>

      {relatedProducts.length !== 0 && (
        <div className="related-product">
          <h2>Related Products</h2>
          <ProductsList products={relatedProducts} />
        </div>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.productSlug;
  const product = await getProductBySlug(slug);
  const relatedProducts = await getRelatedProductsByIds(product.related_ids);
  if (!relatedProducts) {
    return {
      props: {
        product,
      },
    };
  } else {
    return {
      props: {
        product,
        relatedProducts,
      },
    };
  }
}

export default SingleProductPage;
