import { Link } from "react-router-dom";
import CartItem from "../components/CartItem.js";
import "../styles/cart.css";

function Cart({ cart, changeQty, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="container page empty">
        <h1>Your cart is empty</h1>
        <p>Add a device from the shop and it will show up here.</p>
        <Link to="/products" className="btn btn--primary">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container page">
      <h1>Your cart</h1>
      <div className="cart">
        <ul className="cart__list">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              changeQty={changeQty}
              removeItem={removeItem}
            />
          ))}
        </ul>

        <aside className="summary">
          <h2>Order summary</h2>
          <dl>
            <div className="summary__total">
              <dt>Total</dt>
              <dd>${total}</dd>
            </div>
          </dl>
          <Link to="/products" className="btn btn--ghost btn--block">
            Keep shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
