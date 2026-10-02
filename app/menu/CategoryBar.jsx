"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function CategoryBar({ categories }) {
  const searchParams = useSearchParams();
  const selected = searchParams.get("category") || "All";

  return (
    <div className="category-bar">
      {categories.map((category) => {
        const href =
          category === "All"
            ? "/menu"
            : `/menu?category=${encodeURIComponent(category)}`;

        return (
          <Link
            key={category}
            href={href}
            className={selected === category ? "chip on" : "chip"}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryBar;