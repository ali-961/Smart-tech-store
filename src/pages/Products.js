import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard.js";
import CategoryFilter from "../components/CategoryFilter.js";
import { products, categories } from "../data/products.js";
import "../styles/products.css";

function Products({ addToCart }) {
  
  const location = useLocation();
  const [category, setCategory] = useState(location.state?.category || "All");

  
  const visible =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="container page">
      <h1>Shop</h1>

      <div className="toolbar">
        <CategoryFilter
          categories={categories}
          active={category}
          onChange={setCategory}
        />
      </div>

      <div className="grid">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
