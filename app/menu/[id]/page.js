import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishes } from "../../../src/api/dishes";

export default async function DishPage({ params }) {
  const { id } = await params;

  const dishes = await getDishes();

  const dish = dishes.find(
    (item) => String(item.id) === String(id)
  );

  if (!dish) {
    notFound();
  }

  return (
    <section className="detail-card">
      <span className="category-label">
        {dish.category}
      </span>

      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <h2>{dish.price} ETB</h2>

      <div className="detail-actions">
        <Link href="/cart" className="button">
          Go to Cart
        </Link>

        <Link href="/menu" className="button secondary">
          Back to Menu
        </Link>
      </div>
    </section>
  );
}