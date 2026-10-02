import { Link } from "react-router-dom";
import { useCartStore } from "./Cart/CartStore";
import OrderForm from "./OrderForm";

function Checkout() {
  const items = useCartStore((state) => state.items);

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="state-box">
        <h1>Your cart is empty</h1>

        <p>
          Add a dish before checking out.
        </p>

        <Link
          to="/menu"
          className="primary-button"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Almost There</p>

        <h1>Checkout</h1>
      </div>

      <div className="checkout-summary">
        <h2>
          Order total: {total} ETB
        </h2>

        <p>
          {items.reduce(
            (sum, item) =>
              sum + item.quantity,
            0
          )}{" "}
          item(s)
        </p>
      </div>

      <OrderForm />
    </section>
  );
}

export default Checkout;