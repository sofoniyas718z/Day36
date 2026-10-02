"use client";

export default function Error({ reset }) {
  return (
    <div className="state-box error">
      <h2>Something went wrong</h2>

      <p>
        We could not load the menu. Please try again.
      </p>

      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}