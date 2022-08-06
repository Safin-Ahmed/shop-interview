import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Quantity from "../UI/Quantity";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CheckoutTable = ({ cart }) => {
  const dispatch = useDispatch();
  let totalPrice;
  if (cart.length > 0) {
    totalPrice = cart.reduce((acc, cur) => {
      acc = +(acc + cur.totalPrice).toFixed(2);

      return acc;
    }, 0);
  }

  console.log(totalPrice);
  return (
    <TableContainer
      style={{ width: "100%", margin: 0, marginTop: "7rem" }}
      component={Paper}
    >
      <Table
        sx={{ width: "100%", margin: "auto", border: 0 }}
        aria-label="simple table"
      >
        <TableHead style={{ background: "#F6F6F6" }}>
          <TableRow style={{ paddingTop: "16px", paddingBottom: "14px" }}>
            <TableCell
              style={{ color: "#000000", marginLeft: "20px", fontSize: "18px" }}
              align="left"
            >
              Product
            </TableCell>
            <TableCell
              style={{
                color: "#000000",
                marginRight: "20px",
                fontSize: "18px",
              }}
              align="right"
            >
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow
              style={{ marginTop: "23px" }}
              key={item.product_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">
                <Typography variant="body" component="div">
                  {item.product_name} x <b>{item.quantity}</b>
                </Typography>
              </TableCell>
              <TableCell align="right">${item.totalPrice}</TableCell>
            </TableRow>
          ))}

          <TableRow style={{ marginTop: "30px" }}>
            <TableCell align="left">
              <h3>Total</h3>
            </TableCell>
            <TableCell align="right">
              <h3>${totalPrice}</h3>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CheckoutTable;
