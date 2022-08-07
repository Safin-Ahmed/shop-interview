import Head from "next/head";
import React from "react";

import Checkout from "../../components/checkout-page";

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>Interview Shop: Checkout</title>
      </Head>
      <Checkout />
    </>
  );
};

export default CheckoutPage;
