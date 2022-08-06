import { Button, Container } from "@mui/material";
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
      </Container>
    </section>
  );
};

export default CartPage;
