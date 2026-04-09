import { Link } from 'react-router-dom'

export default function ShopHome() {
  return (
    <div>
      <h2>Shop Home</h2>
      <p>Mini project using React Router.</p>
      <Link to="/products">Go to products</Link>
    </div>
  )
}
