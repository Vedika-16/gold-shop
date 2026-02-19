import "./ProductModal.css";

function ProductModal({ product, onClose, addToCart, toggleWishlist }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✖</button>

        <img src={product.image} alt={product.name} />

        <div className="modal-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>

          <div className="modal-actions">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => toggleWishlist(product)}>
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
