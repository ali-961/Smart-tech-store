import "../styles/cart-item.css";

function CartItem({ item, changeQty, removeItem }) {
  return (
    <li className="cart-item">
      <div className="cart-item__media" style={{ background: item.bg }}>
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button className="cart-item__remove" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>

      <div className="cart-item__qty">
        <button onClick={() => changeQty(item.id, -1)}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => changeQty(item.id, 1)}>+</button>
      </div>

      <strong className="cart-item__total">${item.price * item.qty}</strong>
    </li>
  );
}

export default CartItem;
