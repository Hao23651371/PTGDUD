import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'Iphone', price: 25000000 },
  { id: 2, name: 'Samsung', price: 19000000 },
  { id: 3, name: 'Laptop', price: 32000000 },
]

export default function Products() {
  const { addToCart } = useCart()

  return (
    <div>
      <h2>Products</h2>
      <ul className="product-grid-list">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString('vi-VN')}đ</p>
            <div className="inline-form">
              <Link to={`/products/${product.id}`}>View detail</Link>
              <button type="button" onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
