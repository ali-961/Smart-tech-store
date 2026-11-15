import "../styles/product-card.css";

function ProductCard({ product, addToCart }) {
  return (
    <article className="card">
      <div className="card__media" style={{ background: product.bg }}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card__body">
        <p className="card__brand">{product.brand}</p>
        <h3 className="card__name">{product.name}</h3>
        <p className="card__blurb">{product.blurb}</p>
        <div className="card__footer">
          <span className="card__price">${product.price}</span>
          <button className="btn btn--primary" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
