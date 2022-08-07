import { Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { capitalizeFirstLetter } from "../../utils/utils";
import ProductsList from "../shared/ProductsList";
import BreadCumb from "../UI/BreadCumb";
import Quantity from "../UI/Quantity";
import classes from "./product.module.css";

const Product = ({ product, relatedProducts }) => {
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
          rowSpacing={{ xs: 10, md: 0 }}
          columnSpacing={{ xs: 0, md: 14 }}
          justifyContent={{ xs: "center", md: "initial" }}
          className={classes.product_page__product}
        >
          <Grid
            item
            md={6}
            xs={12}
            className={classes.product_page__product__image}
          >
            <Image
              src={`${product.images[0].src}`}
              alt={product.slug}
              width={580}
              height={580}
              layout="responsive"
              objectFit="cover"
            />
          </Grid>
          <Grid
            marginLeft={{ xs: 2, md: 0 }}
            item
            md={6}
            xs={12}
            className={classes.product_page__details}
          >
            <BreadCumb paths={path} />
            <h1 style={{ maxWidth: "94%" }}>{product.name}</h1>
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

export default Product;
