import { Container } from "@mui/material";
import React from "react";
import CheckoutForm from "../../components/checkout-page/CheckoutForm";

const CheckoutPage = () => {
  return (
    <Container
      style={{ marginTop: "10rem", maxWidth: "580px", paddingBottom: "80px" }}
    >
      <h1>Checkout</h1>
      <CheckoutForm />
    </Container>
  );
};

export default CheckoutPage;
