import { useState, useEffect, useRef, useMemo } from "react";
import productsData from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import Toast from "./components/Toast";
import "./App.css";

function App() {
  // ================= SAFE LOCAL STORAGE =================
  const getStorage = (key, defaultValue) => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  };

  // ================= STATES =================
  const [cart, setCart] = useState(() => getStorage("cart", []));
  const [wishlist, setWishlist] = useState(() => getStorage("wishlist", []));
  const [user, setUser] = useState(() => getStorage("user", null));
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(() => getStorage("darkMode", true));
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);

  const contactRef = useRef(null);

  // ================= TOAST FUNCTION =================
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  // ================= EFFECTS =================
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem("darkMode", JSON.stringify(darkMode)), [darkMode]);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(darkMode ? "dark" : "light");
  }, [darkMode]);

  // ================= CART FUNCTIONS =================
  const addToCart = (product) => {
    if (!user) {
      showToast("Please login first", "error");
      return;
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    showToast("Added to cart 🛒");
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    showToast("Cart cleared");
  };

  // ================= WISHLIST =================
  const toggleWishlist = (product) => {
    if (!user) {
      showToast("Please login first", "error");
      return;
    }

    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        showToast("Removed from wishlist");
        return prev.filter((item) => item.id !== product.id);
      }
      showToast("Added to wishlist ❤️");
      return [...prev, product];
    });
  };

  // ================= FILTER PRODUCTS =================
  const filteredProducts = useMemo(() => {
    return productsData.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [category, search]);

  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

  // ================= RENDER =================
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      {/* NAVBAR */}
      <Navbar
        setCategory={setCategory}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        cart={cart}
        wishlist={wishlist}
        setCartOpen={setCartOpen}
        setWishlistOpen={setWishlistOpen}
        scrollToContact={scrollToContact}
        user={user}
        setLoginOpen={setLoginOpen}
        setProfileOpen={setProfileOpen}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>💎 Luxury Gold Jewelry</h1>
          <p>Exclusive collections for every occasion</p>
          <button onClick={() => setCategory("all")}>
            Shop Now
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
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
            setSelectedProduct={setSelectedProduct}
          />
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact-section" ref={contactRef}>
        <h2>Contact Us</h2>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value.trim();
            const email = e.target.email.value.trim();
            const message = e.target.message.value.trim();

            if (!name || !email || !message) {
              showToast("Please fill in all fields!", "error");
              return;
            }

            showToast(`Thank you, ${name}! Message received.`);
            e.target.reset();
          }}
        >
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message" rows="5" />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* CART DRAWER */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <button className="close-cart" onClick={() => setCartOpen(false)}>❌</button>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>

      {/* WISHLIST DRAWER */}
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
                  <button onClick={() => toggleWishlist(item)}>
                    Remove
                  </button>
                  <button onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LOGIN DRAWER */}
      {loginOpen && !user && (
        <div className="drawer open">
          <button className="close-cart" onClick={() => setLoginOpen(false)}>❌</button>
          <Login
            setUser={setUser}
            closeDrawer={() => setLoginOpen(false)}
          />
        </div>
      )}

      {/* PROFILE DRAWER */}
      {profileOpen && user && (
        <div className="drawer open">
          <button className="close-cart" onClick={() => setProfileOpen(false)}>❌</button>
          <Profile
            user={user}
            setUser={setUser}
            logout={() => {
              setUser(null);
              setProfileOpen(false);
              showToast("Logged out");
            }}
          />
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
        />
      )}

      {/* TOAST */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
