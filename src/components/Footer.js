import logo from "../assets/main-wallpaper.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt="Smart Tech Store" className="footer__logo" />
        <p className="footer__note">© 2026 Smart Tech Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
