import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

function Amount({ img, name, price, id }) {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const item = useSelector((state) => state.cart.items).find((item) => item.id === id);
  
  const addItem = () => {
    setAmount((a) => a + 1);
    dispatch(add({ img, name, price, id }));
  };
  const removeItem = () => {
    setAmount((a) => (a > 1 ? a - 1 : 1));
    dispatch(remove(id));
  };
  return (
    <div className="amount">
      <button onClick={removeItem}>-</button>
      <input type="text" value={item.amount} onChange={(e) => setAmount(amount)} />
      <button onClick={addItem}>+</button>
    </div>
  );
}
export default Amount;
