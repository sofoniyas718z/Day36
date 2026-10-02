import Link from "next/link";

export default function NotFound() {
  return (
    <div className="state-box">
      <h2>Dish not found</h2>

      <p>
        The dish you requested does not exist.
      </p>

      <Link href="/menu" className="button">
        Back to Menu
      </Link>
    </div>
  );
}