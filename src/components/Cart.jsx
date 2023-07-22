import { GrClose } from "react-icons/gr";
import CartItem from "./CartItem";
import { toCurrency } from "../utils/formatters";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setState } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setState({
      items: JSON.parse(localStorage.getItem('items')) ?? [],
      total: localStorage.getItem('total') ?? 0
    }))
  }, [])

  const close = () => {
    const overlay = document.querySelector("#overlay");
    const cart = document.querySelector(".cart");
    if (overlay.classList.contains("active")) {
      cart.classList.remove("opened");
      overlay.classList.remove("active");
    }
  }


  const items = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);
  
  

  return (
    <div className="cart">
      <button
        className="close"
        onClick={close}
      >
        <GrClose size={30} />
      </button>

      <ul>
        {items?.map((item) => (
          <CartItem item={item} key={`cartItem__${item.id}`} />
        ))}
      </ul>

      <div className="cart__bottom">
        <p className="cart__total">
          Total: <span>{toCurrency(total)}</span>
        </p>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
