import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Welcome to Addis Eats</p>

        <h1>
          Authentic Ethiopian food,
          <br />
          delivered with love.
        </h1>

        <p className="hero-text">
          Discover delicious Ethiopian dishes prepared
          with traditional flavors and fresh ingredients.
        </p>

        <div className="hero-actions">
          <Link href="/menu" className="button">
            Explore Menu
          </Link>

          <Link href="/cart" className="button secondary">
            View Cart
          </Link>
        </div>
      </div>
    </section>
  );
}