import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useState } from "react";
import { toCurrency } from "../utils/formatters";

function Product({ img, name, price, id }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    dispatch(add({ img, name, price, id }));
    setTimeout(() => setAdded(false), 650);
  };
  return (
    <div className="product">
      <img src={img} alt="" />
      <p>{name}</p>
      <span>{toCurrency(price)}</span>
      <button onClick={handleClick} className={added ? "added" : ""}>
        {added ? "Added!" : "Add"}
      </button>
    </div>
  );
}

export default Product;
