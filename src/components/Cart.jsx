function Cart({ cart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name} x {item.quantity}</span>
          <span>${(item.price * item.quantity).toLocaleString()}</span>
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString()}</h3>

      {cart.length > 0 && <button className="clear-btn" onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default Cart;
