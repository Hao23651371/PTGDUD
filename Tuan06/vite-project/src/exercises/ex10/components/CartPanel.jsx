import { useCart } from '../contexts/CartContext'
import { useNotify } from '../contexts/NotificationContext'

export default function CartPanel() {
  const { items, total, increaseQty, decreaseQty, clearCart } = useCart()
  const { notify } = useNotify()

  return (
    <div className="demo-card">
      <h3>Cart global</h3>
      {items.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <ul className="list-plain">
            {items.map((item) => (
              <li key={item.id} className="row between">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <div className="row gap-sm">
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
          <p>
            <strong>Tổng: {total.toLocaleString('vi-VN')}đ</strong>
          </p>
          <button
            type="button"
            className="danger"
            onClick={() => {
              clearCart()
              notify('Đã xóa toàn bộ giỏ hàng', 'info')
            }}
          >
            Clear cart
          </button>
        </>
      )}
    </div>
  )
}
