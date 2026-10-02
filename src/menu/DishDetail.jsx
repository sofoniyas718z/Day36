import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCartStore } from "../Cart/CartStore";
import { getDishes } from "../api/dishes";

function DishDetail() {
  const { id } = useParams();

  const addItem = useCartStore((state) => state.addItem);

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadDish() {
      try {
        setLoading(true);
        setError("");

        const data = await getDishes();

        const foundDish = data.find(
          (item) => String(item.id) === id
        );

        if (active) {
          setDish(foundDish || null);
        }
      } catch {
        if (active) {
          setError(
            "We could not load this dish. Please try again."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadDish();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="state-box">
        <h2>Loading dish...</h2>
        <p>Please wait.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-box error">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  if (!dish) {
    return (
      <div className="state-box">
        <h2>Dish not found</h2>

        <p>
          The dish you requested does not exist.
        </p>

        <Link to="/menu">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <section className="detail-card">
      <span className="category-label">
        {dish.category}
      </span>

      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <h2>{dish.price} ETB</h2>

      <button onClick={() => addItem(dish)}>
        Add to Cart
      </button>

      <Link to="/cart">
        Go to Cart
      </Link>

      <Link to="/menu">
        Back to Menu
      </Link>
    </section>
  );
}

export default DishDetail;