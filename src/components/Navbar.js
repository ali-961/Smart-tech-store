import { Link, NavLink } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";
import "../styles/navbar.css";

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logoIcon} alt="" className="navbar__logo" />
          <span>Smart Tech Store</span>
        </Link>

        <nav className="navbar__links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/cart">Cart{cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
