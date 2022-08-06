import { Container, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/checkout-page/CheckoutForm";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.items);
  if (cart.length === 0) {
    return (
      <Container
        style={{
          marginTop: "10rem",
          maxWidth: "580px",
          paddingBottom: "80px",
        }}
      >
        <Typography variant="h2" component="h2">
          Your cart is empty
        </Typography>
      </Container>
    );
  }
  return (
    <Container
      style={{
        marginTop: "10rem",
        maxWidth: "580px",
        paddingBottom: "80px",
      }}
    >
      <h1>Checkout</h1>
      <CheckoutForm />
    </Container>
  );
};

export default CheckoutPage;
