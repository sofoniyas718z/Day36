import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Authentic Ethiopian Food</p>

        <h1>Good food, delivered across Addis Ababa.</h1>

        <p>
          Discover traditional Ethiopian dishes, order your favorites,
          and enjoy them wherever you are.
        </p>

        <Link to="/menu" className="primary-button">
          Explore Menu
        </Link>
      </div>
    </section>
  );
}

export default Home;