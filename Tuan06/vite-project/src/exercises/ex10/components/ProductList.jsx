import { useCart } from '../contexts/CartContext'
import { useNotify } from '../contexts/NotificationContext'
import { useProducts } from '../contexts/ProductContext'

export default function ProductList() {
  const { data, loading, error } = useProducts()
  const { addToCart } = useCart()
  const { notify } = useNotify()

  if (loading) return <p className="status loading">Đang tải sản phẩm...</p>
  if (error) return <p className="status error">{error}</p>

  return (
    <div className="product-grid">
      {data.map((product) => (
        <article key={product.id} className="demo-card product-card">
          <h4>{product.title}</h4>
          <p>{product.price.toLocaleString('vi-VN')}đ</p>
          <button
            type="button"
            onClick={() => {
              addToCart({ id: product.id, title: product.title, price: product.price * 1000 })
              notify(`Đã thêm ${product.title} vào giỏ`, 'success')
            }}
          >
            Thêm vào giỏ
          </button>
        </article>
      ))}
    </div>
  )
}
