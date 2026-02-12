import { useState } from "react";

function Navbar({
  setCategory,
  toggleDarkMode,
  darkMode,
  cart,
  wishlist,
  setCartOpen,
  setWishlistOpen,
  scrollToContact,
}) {
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const handleCollectionClick = (cat) => {
    setCategory(cat);
    setCollectionsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>💎 Luxury Gold</h2>

      <div className="nav-links">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("ring")}>Rings</button>
        <button onClick={() => setCategory("necklace")}>Necklaces</button>
        <button onClick={() => setCategory("earring")}>Earrings</button>

        {/* Collections Dropdown */}
        <div className="dropdown">
          <button onClick={() => setCollectionsOpen(!collectionsOpen)}>
            Collections ▼
          </button>
          {collectionsOpen && (
            <div className="dropdown-content">
              <button onClick={() => handleCollectionClick("engagement")}>Engagement</button>
              <button onClick={() => handleCollectionClick("wedding")}>Wedding</button>
              <button onClick={() => handleCollectionClick("casual")}>Casual</button>
            </div>
          )}
        </div>

        <button onClick={scrollToContact}>Contact</button>
      </div>

      <div className="nav-right">
        <button className="mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀" : "🌙"}
        </button>

        <div className="nav-cart" onClick={() => setCartOpen(true)}>
          🛒 {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </div>

        <div className="nav-wishlist" onClick={() => setWishlistOpen(true)}>
          ❤️ {wishlist.length > 0 && <span className="cart-count">{wishlist.length}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
