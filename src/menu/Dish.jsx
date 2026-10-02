import { Link } from "react-router-dom";
import { useCartStore } from "../Cart/CartStore";

function Dish({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="dish-card">
      <div className="dish-info">
        <span className="category-label">{dish.category}</span>

        <h3>{dish.name}</h3>

        <p>{dish.description}</p>

        <strong>{dish.price} ETB</strong>
      </div>

      <div className="dish-actions">
        <Link to={`/menu/${dish.id}`}>View</Link>

        <button onClick={() => addItem(dish)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default Dish;