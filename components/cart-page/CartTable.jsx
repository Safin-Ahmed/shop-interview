import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Quantity from "../UI/Quantity";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartTable = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <TableContainer sx={{ width: "80%", margin: "auto" }} component={Paper}>
      <Table
        sx={{ width: "100%", margin: "auto", border: 0 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow
              key={item.product_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Image
                  src={item.product_image}
                  alt={item.product_name}
                  width={121}
                  height={118}
                />
              </TableCell>
              <TableCell align="left">{item.product_name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">
                <Quantity
                  id={item.product_id}
                  dispatch={dispatch}
                  value={item.quantity}
                />
              </TableCell>
              <TableCell align="left">{item.totalPrice}</TableCell>
              <TableCell align="left">
                <Button
                  onClick={() =>
                    dispatch(cartActions.deleteItem({ id: item.product_id }))
                  }
                >
                  X
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
