import Dish from "./Dish";

function DishList({ dishes }) {
  if (dishes.length === 0) {
    return (
      <div className="state-box">
        <h2>No dishes found</h2>
        <p>Try another category.</p>
      </div>
    );
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;
