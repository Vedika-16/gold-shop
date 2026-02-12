import { useState, useEffect, useRef } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlist)), [wishlist]);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  const filteredProducts = productsData.filter(
    (product) =>
      (category === "all" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar
        setCategory={setCategory}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        cart={cart}
        wishlist={wishlist}
        setCartOpen={setCartOpen}
        setWishlistOpen={setWishlistOpen}
        scrollToContact={scrollToContact}
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>💎 Luxury Gold Jewelry</h1>
          <p>Exclusive collections for every occasion</p>
          <button onClick={() => setCategory("all")}>Shop Now</button>
        </div>
      </section>

      {/* Products */}
      <div className="main-layout">
        <div className="products-section">
          <div className="search">
            <input
              type="text"
              placeholder="Search jewelry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ProductList
            products={filteredProducts}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        </div>
      </div>

      {/* Contact */}
      <section className="contact-section" ref={contactRef}>
        <h2>Contact Us</h2>
        <p>Email: support@luxurygold.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Location: New York, USA</p>
      </section>

      {/* Cart Drawer */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <button className="close-cart" onClick={() => setCartOpen(false)}>❌</button>
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </div>

      {/* Wishlist Drawer */}
      <div className={`wishlist-drawer ${wishlistOpen ? "open" : ""}`}>
        <button className="close-cart" onClick={() => setWishlistOpen(false)}>❌</button>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="cart">
            {wishlist.map((item) => (
              <div className="cart-item" key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <div>
                  <button onClick={() => toggleWishlist(item)}>Remove</button>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
