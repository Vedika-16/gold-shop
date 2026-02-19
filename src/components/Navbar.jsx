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
  user,
  setLoginOpen,
  setProfileOpen,
}) {
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  const handleCollectionClick = (cat) => {
    setCategory(cat);
    setCollectionsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">💎 Luxury Gold</h2>

      {/* LEFT LINKS */}
      <div className="nav-links">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("ring")}>Rings</button>
        <button onClick={() => setCategory("necklace")}>Necklaces</button>
        <button onClick={() => setCategory("earring")}>Earrings</button>
        <button onClick={() => setCategory("sets")}>Couple Sets</button>

        {/* Collections Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setCollectionsOpen(!collectionsOpen)}
          >
            Collections ▼
          </button>
          {collectionsOpen && (
            <div className="dropdown-menu">
              <div onClick={() => handleCollectionClick("engagement")}>Engagement</div>
              <div onClick={() => handleCollectionClick("wedding")}>Wedding</div>
              <div onClick={() => handleCollectionClick("casual")}>Casual</div>
            </div>
          )}
        </div>

        <button onClick={scrollToContact}>Contact</button>
      </div>

      {/* USER LOGIN / PROFILE */}
      <div className="navbar-profile">
        {user ? (
          <button onClick={() => setProfileOpen(true)}>{user.name}</button>
        ) : (
          <button onClick={() => setLoginOpen(true)}>Login</button>
        )}
      </div>

      {/* RIGHT ICONS */}
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
