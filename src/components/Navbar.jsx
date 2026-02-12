function Navbar({ setCategory, toggleDarkMode, darkMode }) {
  return (
    <nav className="navbar">
      <h2>💎 Luxury Gold</h2>

      <div className="nav-links">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("ring")}>Rings</button>
        <button onClick={() => setCategory("necklace")}>Necklaces</button>
        <button onClick={() => setCategory("earring")}>Earrings</button>
      </div>

      <button onClick={toggleDarkMode}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
