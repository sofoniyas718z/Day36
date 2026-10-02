import { Link } from "react-router-dom";
import { useCartStore } from "./Cart/CartStore";

function CartBadge() {
  const items = useCartStore((state) => state.items);

  const count = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      to="/cart"
      className="cart-badge"
    >
      Cart ({count})
    </Link>
  );
}

export default CartBadge;