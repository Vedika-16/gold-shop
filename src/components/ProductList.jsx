function ProductList({ products, addToCart, toggleWishlist, wishlist }) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        const inWishlist = wishlist.find((item) => item.id === product.id);
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => toggleWishlist(product)}>
              {inWishlist ? "💖 Remove" : "🤍 Wishlist"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
