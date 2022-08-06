import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { getProductBySlug, getRelatedProductsByIds } from "../../../../../api";
import Image from "next/image";
import ProductsList from "../../../../../components/shared/ProductsList";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/cart";
import Quantity from "../../../../../components/UI/Quantity";
import { Container, Grid, Stack } from "@mui/material";

import classes from "./product.module.css";
import { capitalizeFirstLetter } from "../../../../../utils/utils";
import BreadCumb from "../../../../../components/UI/BreadCumb";

const SingleProductPage = ({ product, relatedProducts }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const path = router.asPath.split("/");
  const finalPath = `${capitalizeFirstLetter(
    path[1]
  )} / ${capitalizeFirstLetter(path[2])} / ${capitalizeFirstLetter(path[3])}`;
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
    <section className={classes.product_page}>
      <Container maxWidth="lg">
        <Grid
          alignItems="center"
          container
          spacing={30}
          className={classes.product_page__product}
        >
          <Grid item md={6} className={classes.product_page__product__image}>
            <Image
              src={`${product.images[0].src}`}
              alt={product.slug}
              width={580}
              height={580}
              layout="fixed"
              objectFit="cover"
            />
          </Grid>
          <Grid item md={6} className={classes.product_page__details}>
            <BreadCumb paths={path} />
            <h1>{product.name}</h1>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ marginTop: "25px", marginBottom: "37px" }}
            >
              {product.sale_price && (
                <p
                  style={{
                    margin: 0,
                    color: "#000",
                    opacity: "0.5",
                    fontSize: "16px",
                    textDecoration: "line-through",
                  }}
                >
                  {product.regular_price}
                </p>
              )}
              <p style={{ fontWeight: 500, margin: 0 }}>${product.price}</p>
            </Stack>
            <p style={{ marginBottom: "37px" }}>
              {product.short_description.slice(3, -5)}
            </p>

            <div className={classes.product__add_to_cart}>
              <Quantity value={value} setValue={setValue} ref={quantityRef} />
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "400",
                  cursor: "pointer",
                  padding: "15px 30px",
                }}
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </Grid>
        </Grid>

        {relatedProducts.length !== 0 && (
          <div className={classes.related_products}>
            <h2>Related Products</h2>
            <ProductsList products={relatedProducts} />
          </div>
        )}
      </Container>
    </section>
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
