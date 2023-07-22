import Amount from "./Amount";
import { toCurrency } from "../utils/formatters";

function CartItem({ item }) {
  return (
    <li>
      <div>
        <p>{item.name}</p>
        <span>{toCurrency(item.price)}</span>
        <Amount id={item.id}/>
      </div>
    </li>
  );
}

export default CartItem;
