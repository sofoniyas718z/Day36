"use client";

import Link from "next/link";
import useCartStore from "../../src/cart/CartStore";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const decrease = useCartStore((state) => state.decrease);
  const add = useCartStore((state) => state.add);
  const remove = useCartStore((state) => state.remove);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section>
        <div className="section-heading">
          <p className="eyebrow">Your Cart</p>
          <h1>Your cart is empty</h1>
          <p>Add something delicious from the menu.</p>
        </div>

        <Link href="/menu" className="button">
          Browse Menu
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Your Cart</p>
        <h1>Your order</h1>
      </div>

      <div className="cart-list">
        {cart.map((item) => (
          <article className="cart-item" key={item.id}>
            <div>
              <span className="category-label">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.price} ETB each</p>
            </div>

            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => decrease(item.id)}
              >
                -
              </button>

              <strong>{item.quantity}</strong>

              <button
                className="quantity-button"
                onClick={() => add(item)}
              >
                +
              </button>

              <button
                className="remove-button"
                onClick={() => remove(item.id)}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: {total} ETB</h2>

        <div className="page-actions">
          <Link href="/menu" className="button secondary">
            Continue Shopping
          </Link>

          <Link href="/checkout" className="button">
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
