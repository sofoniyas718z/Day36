import Link from "next/link";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { getDishes } from "../../src/api/dishes";

export default async function MenuPage({ searchParams }) {
  const dishes = await getDishes();

  const params = await searchParams;
  const selectedCategory = params?.category || "All";

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category)),
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === selectedCategory
        );

  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Addis Eats</p>

        <h1>Choose your favorite dish</h1>

        <p>
          Traditional Ethiopian dishes made with love.
        </p>
      </div>

      <CategoryBar categories={categories} />

      <DishList dishes={filteredDishes} />

      <div className="page-actions">
        <Link href="/" className="button secondary">
          Home
        </Link>

        <Link href="/cart" className="button">
          View Cart
        </Link>
      </div>
    </section>
  );
}