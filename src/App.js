import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Cart from "./pages/Cart.js";

function App() {
 
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id);
    if (found) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function changeQty(id, amount) {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    );
    setCart(updated.filter((item) => item.qty > 0));
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} changeQty={changeQty} removeItem={removeItem} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
