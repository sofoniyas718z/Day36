import { useSearchParams } from "react-router-dom";

function CategoryBar({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const selected = searchParams.get("category") || "All";

  function selectCategory(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => selectCategory(category)}
          className={selected === category ? "chip on" : "chip"}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;