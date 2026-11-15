import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.js";
import TeamMember from "../components/TeamMember.js";
import { products, categories } from "../data/products.js";
import "../styles/home.css";

const perks = [
  { title: "Best quality", text: "Brand new devices with the latest technology." },
  { title: "2-year warranty", text: "Every device is covered, with real people to call." },
  { title: "30-day returns", text: "Not the right fit? Send it back for a full refund." },
];

const team = [
  { name: "Hassan", role: "Store manager" },
  { name: "Ali", role: "Product specialist" },
  { name: "Karim", role: "Customer support" },
];

const Home=({ addToCart })=> {
  
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>The phones, watches and gadgets you'll actually use.</h1>
            <p>
              Smart Tech Store carries the best devices from Apple, Google,
              Samsung and Microsoft, with clear prices and fast delivery.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary btn--lg">
                Shop all products
              </Link>
              <Link to="/cart" className="btn btn--light btn--lg">
                View cart
              </Link>
            </div>
          </div>

          <div className="hero__tiles">
            {[products[1], products[5], products[0]].map((p) => (
              <div key={p.id} className="hero__tile" style={{ background: p.bg }}>
                <img src={p.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Shop by category</h2>
        <div className="categories">
          {categories
            .filter((c) => c !== "All")
            .map((category) => (
              <Link
                key={category}
                to="/products"
                state={{ category }}
                className="categories__item"
              >
                {category}
              </Link>
            ))}
        </div>
      </section>

      <section className="section container">
        <div className="section__head">
          <h2>Featured devices</h2>
          <Link to="/products" className="link">See everything</Link>
        </div>
        <div className="grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>

      <section className="perks">
        <div className="container perks__inner">
          {perks.map((perk) => (
            <div key={perk.title}>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>The people behind the store</h2>
        <div className="team">
          {team.map((member) => (
            <TeamMember key={member.name} name={member.name} role={member.role} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
