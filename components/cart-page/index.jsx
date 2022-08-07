import { Button, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import CartTable from "./CartTable";
import { useSelector } from "react-redux";
import classes from "./cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <section
      className="cart-page"
      style={{ marginTop: "8rem", paddingBottom: "7rem" }}
    >
      <Container>
        {cart.length > 0 ? (
          <>
            <h2 style={{ fontSize: "24px", marginBottom: "77px" }}>Cart</h2>
            <CartTable cart={cart} />
          </>
        ) : (
          <h2>Your Cart is Empty!</h2>
        )}
        {cart.length > 0 && (
          <div className={classes.checkout_btn}>
            <Button
              sx={{
                marginTop: "38px",
                mx: 5,
                background: "#000",
                padding: "15px 30px",
                "&:hover": { background: "#1f1d1d" },
              }}
              variant="contained"
              color="primary"
            >
              <Link href={"/checkout"}>PROCCEED TO CHECKOUT</Link>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Cart;
