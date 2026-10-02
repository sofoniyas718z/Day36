import { Link } from "react-router-dom";
import { useCartStore } from "./Cart/CartStore";

function Cart() {
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.remove);
  const decrease = useCartStore((state) => state.decrease);
  const clear = useCartStore((state) => state.clear);

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
          Add something delicious from the menu.
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
        <p className="eyebrow">Your Order</p>
        <h1>Cart</h1>
      </div>

      <div className="cart-list">
        {items.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >
            <div>
              <h3>{item.name}</h3>

              <p>
                {item.price} ETB × {item.quantity}
              </p>

              <strong>
                {item.price * item.quantity} ETB
              </strong>
            </div>

            <div className="cart-actions">
              <button
                onClick={() => decrease(item.id)}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => {
                  const dish = {
                    ...item
                  };

                  delete dish.quantity;

                  useCartStore
                    .getState()
                    .addItem(dish);
                }}
              >
                +
              </button>

              <button
                onClick={() => remove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>
          Total: {total} ETB
        </h2>

        <div>
          <button onClick={clear}>
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="primary-button"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;