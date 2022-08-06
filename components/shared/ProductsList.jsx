import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <>
      <Grid container spacing={3}>
        {products.map((item) => {
          if (item) {
            return (
              <Grid item xs={12} sm={6} md={3}>
                <ProductCard
                  key={item?.id}
                  title={item?.name}
                  price={item?.price}
                  regular={item?.regular_price}
                  sale={item?.sale_price}
                  image={item?.images[0]}
                  slug={item?.slug}
                  categories={item?.categories}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
};

export default ProductsList;
