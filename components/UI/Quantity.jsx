import React, { forwardRef, useState } from "react";
import { cartActions } from "../../store/cart";
import classes from "./Quantity.module.css";

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
    <div className={classes.quantity_box}>
      <button onClick={decrementHandler}>-</button>
      <input value={props.value} ref={ref} type="text" />
      <button onClick={incrementHandler}>+</button>
    </div>
  );
};

export default forwardRef(Quantity);
