import React, { forwardRef, useState } from "react";
import { cartActions } from "../../store/cart";
import classes from "./Quantity.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Quantity = (props, ref) => {
  const incrementHandler = () => {
    if (!props.setValue) {
      props.dispatch(cartActions.addItem({ id: props.id }));
      return;
    }
    props.setValue((state) => state + 1);
  };
  const decrementHandler = () => {
    if (props.value === 0) {
      return;
    }

    if (!props.setValue) {
      props.dispatch(cartActions.removeItem({ id: props.id }));
      return;
    }

    props.setValue((state) => state - 1);
  };
  return (
    <div className={classes.quantity_box} style={{ padding: "15px 10px" }}>
      <button onClick={decrementHandler}>
        <RemoveIcon sx={{ fontWeight: 400, fontSize: "20px" }} />
      </button>
      <input
        style={{ fontSize: "16px" }}
        value={props.value}
        ref={ref}
        type="text"
      />
      <button onClick={incrementHandler}>
        <AddIcon sx={{ fontWeight: 400, fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default forwardRef(Quantity);
