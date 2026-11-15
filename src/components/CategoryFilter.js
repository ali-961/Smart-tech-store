import "../styles/category-filter.css";

function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter__chip ${active === category ? "is-active" : ""}`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
