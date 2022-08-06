import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import CheckoutTable from "./CheckoutTable";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { cartActions } from "../../store/cart";
import CustomTextField from "../UI/CustomTextField";

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    setEmail("");
    setFirstName("");
    setLastName("");
    const orderData = {
      firstName,
      lastName,
      email,
      cart,
    };

    console.log(orderData);

    fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          alert("Order Placed Successfully!");
          router.replace("/shop");
          dispatch(cartActions.clearCart());
        }
      });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        gap: "2rem",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        style={{
          width: "100%",
          margin: "auto",
          marginBottom: "52px",
          marginTop: "66px",
        }}
      >
        <Typography
          sx={{ fontSize: "14px" }}
          variant="caption"
          component="label"
        >
          Email *
        </Typography>
        <CustomTextField
          placeholder="email@example.com"
          sx={{
            width: "100%",
            marginTop: "8px",
          }}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
      </Box>

      <Stack style={{ width: "100%", margin: 0 }} spacing={2} direction="row">
        <Box style={{ width: "100%" }}>
          <Typography
            sx={{ fontSize: "14px" }}
            variant="caption"
            component="label"
          >
            First name *
          </Typography>
          <CustomTextField
            sx={{ width: "100%", marginTop: "8px" }}
            id="first_name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
          />
        </Box>

        <Box style={{ width: "100%" }}>
          <Typography
            sx={{ fontSize: "14px" }}
            variant="caption"
            component="label"
          >
            Last name *
          </Typography>
          <CustomTextField
            placeholder="Doe"
            sx={{ width: "100%", marginTop: "8px" }}
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
          />
        </Box>
      </Stack>
      <CheckoutTable cart={cart} />

      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          onClick={submitOrder}
          style={{
            background: "#000",
            marginTop: "86px",
            padding: "15px 30px",
          }}
          variant="contained"
        >
          CONFIRM PURCHASE
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
