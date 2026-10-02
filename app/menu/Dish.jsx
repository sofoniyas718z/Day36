"use client";

import Link from "next/link";
import useCartStore from "../../src/cart/CartStore";

function Dish({ dish }) {
  const addItem = useCartStore((state) => state.add);

  return (
    <article className="dish-card">
      <div className="dish-info">
        <span className="category-label">{dish.category}</span>

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <strong>{dish.price} ETB</strong>
      </div>

      <div className="dish-actions">
        <Link href={`/menu/${dish.id}`} className="button secondary">
          View
        </Link>

        <button
          className="button"
          onClick={() => addItem(dish)}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default Dish;