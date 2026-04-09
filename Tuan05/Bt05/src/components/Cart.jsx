import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, total, increaseQty, decreaseQty, clearCart } = useCart()

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Gio hang dang trong.</p>
      ) : (
        <ul className="product-list">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} x {item.quantity} = {(item.price * item.quantity).toLocaleString('vi-VN')}đ
              </span>
              <div className="cart-actions">
                <button type="button" onClick={() => decreaseQty(item.id)}>
                  -
                </button>
                <button type="button" onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p>
        <strong>Total: {total.toLocaleString('vi-VN')}đ</strong>
      </p>
      <div className="inline-form">
        <button type="button" onClick={clearCart}>
          Clear cart
        </button>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  )
}
