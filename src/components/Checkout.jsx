import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { toCurrency } from "../utils/formatters";
import { useEffect } from "react";
import { setState } from "../store/cartSlice";

function Checkout() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setState({
      items: JSON.parse(localStorage.getItem('items')),
      total: localStorage.getItem('total')
    }))
  }, [])

  const total = useSelector((store) => store.cart.total);
  return (
    <>
      <form method="post">
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your email" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Postal Code" />
        <p>Total: {toCurrency(total)}</p>
        <input type="submit" value="Payment" />
      </form>
    </>
  );
}

export default Checkout;
