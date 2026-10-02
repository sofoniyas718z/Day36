"use client";

import Link from "next/link";
import { useState } from "react";
import useCartStore from "../../src/cart/CartStore";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const clear = useCartStore((state) => state.clear);

  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleSubmit(event) {
    event.preventDefault();
    clear();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="state-box">
        <h1>Order received!</h1>

        <p>
          Thank you for ordering from Addis Eats.
        </p>

        <Link href="/" className="button">
          Back Home
        </Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="state-box">
        <h1>Your cart is empty</h1>

        <p>Add a dish before checking out.</p>

        <Link href="/menu" className="button">
          Browse Menu
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Checkout</p>
        <h1>Complete your order</h1>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="09..."
            required
          />
        </label>

        <label>
          Delivery Address
          <textarea
            name="address"
            placeholder="Your delivery address"
            required
          />
        </label>

        <div className="checkout-total">
          <strong>Total: {total} ETB</strong>
        </div>

        <button type="submit" className="button">
          Place Order
        </button>

        <Link href="/cart" className="button secondary">
          Back to Cart
        </Link>
      </form>
    </section>
  );
}
