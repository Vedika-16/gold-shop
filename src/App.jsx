import { useState, useEffect } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.body.classList.remove("dark", "light"); // remove previous
    document.body.classList.add(darkMode ? "light" : "dark"); // add current
  }, [darkMode]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const filteredProducts = productsData.filter(product =>
    (category === "all" || product.category === category) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar
        setCategory={setCategory}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
      />

      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>💎 Luxury Gold Jewelry</h1>
          <p>Exclusive collections for every occasion</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Main Layout */}
      <div className="main-layout">
        <div className="products-section">
          <div className="search">
            <input
              type="text"
              placeholder="Search jewelry..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>
      </div>

      {/* Floating Cart Icon */}
      <div className="floating-cart" onClick={() => setCartOpen(true)}>
        🛒 {cart.length}
      </div>

      {/* Slide-in Cart Drawer */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <button className="close-cart" onClick={() => setCartOpen(false)}>❌</button>
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </div>
    </div>
  );
}

export default App;
