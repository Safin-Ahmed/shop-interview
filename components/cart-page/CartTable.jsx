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
import { Close } from "@mui/icons-material";

const CartTable = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <TableContainer sx={{ width: "100%", margin: "auto" }} component={Paper}>
      <Table
        sx={{ width: "100%", margin: "auto", border: 0 }}
        aria-label="simple table"
      >
        <TableHead sx={{ background: "#000" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}></TableCell>
            <TableCell sx={{ color: "#fff" }} align="left">
              Product
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="left">
              Price
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="left">
              Quantity
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="left">
              Total
            </TableCell>
            <TableCell sx={{ color: "#fff" }} align="left"></TableCell>
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
                  layout="fixed"
                  objectFit="cover"
                  width={121}
                  height={118}
                />
              </TableCell>
              <TableCell
                sx={{ fontWeight: "700", fontSize: "16px" }}
                align="left"
              >
                {item.product_name}
              </TableCell>
              <TableCell align="left">${item.price}</TableCell>
              <TableCell align="left">
                <Quantity
                  id={item.product_id}
                  dispatch={dispatch}
                  value={item.quantity}
                />
              </TableCell>
              <TableCell align="left">${item.totalPrice}</TableCell>
              <TableCell align="left">
                <Button
                  sx={{
                    color: "#000",
                    "&:hover": { background: "transparent" },
                  }}
                  onClick={() =>
                    dispatch(cartActions.deleteItem({ id: item.product_id }))
                  }
                >
                  <Close color="#000" />
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
