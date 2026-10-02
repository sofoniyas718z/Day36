import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";
import { getDishes } from "../api/dishes";

function Menu() {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "All";

  useEffect(() => {
    let active = true;

    async function loadDishes() {
      try {
        setLoading(true);
        setError("");

        const data = await getDishes();

        if (active) {
          setDishes(data);
        }
      } catch {
        if (active) {
          setError("We could not load the menu. Please try again.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadDishes();

    return () => {
      active = false;
    };
  }, []);

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category))
  ];

  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === selectedCategory
        );

  if (loading) {
    return (
      <div className="state-box">
        <h2>Loading menu...</h2>
        <p>Preparing today's dishes.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-box error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <p className="eyebrow">Our Menu</p>
        <h1>Choose your favorite dish</h1>
      </div>

      <CategoryBar categories={categories} />

      <DishList dishes={filteredDishes} />
    </section>
  );
}

export default Menu;