import { Button } from "@mui/material";
import React from "react";
import CartTable from "../../components/cart-page/CartTable";
import classes from "./cart.module.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const router = useRouter();

  return (
    <div className="cart-page" style={{ marginTop: "8rem" }}>
      {cart.length > 0 ? (
        <>
          <h2>Cart</h2>
          <CartTable cart={cart} />
        </>
      ) : (
        <h2>Your Cart is Empty!</h2>
      )}
      <div className={classes.checkout_btn}>
        <Button sx={{ my: 5, mx: 5 }} variant="contained" color="primary">
          <Link href={"/checkout"}>PROCCEED TO CHECKOUT</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
