import { Link, useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const products = {
  1: 'Iphone',
  2: 'Samsung',
  3: 'Laptop',
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const productName = products[id] || 'Unknown Product'
  const productPrice =
    id === '1' ? 25000000 : id === '2' ? 19000000 : id === '3' ? 32000000 : 0

  const product = {
    id: Number(id),
    name: productName,
    price: productPrice,
  }

  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
      <p>Product Name: {productName}</p>
      <p>Price: {productPrice.toLocaleString('vi-VN')}đ</p>
      <div className="inline-form">
        <button
          type="button"
          onClick={() => {
            addToCart(product)
            navigate('/checkout')
          }}
        >
          Mua hàng
        </button>
        <button type="button" onClick={() => addToCart(product)}>
          Thêm vào giỏ
        </button>
      </div>
      <Link to="/products">Back to products</Link>
    </div>
  )
}
