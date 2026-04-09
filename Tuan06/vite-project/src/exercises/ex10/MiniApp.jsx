import AuthPanel from './components/AuthPanel'
import CartPanel from './components/CartPanel'
import ProductList from './components/ProductList'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import { NotificationProvider } from './contexts/NotificationContext'
import { ProductProvider } from './contexts/ProductContext'

function MiniAppContent() {
  return (
    <>
      <AuthPanel />
      <div className="grid two-col">
        <div className="demo-card">
          <h3>Product global</h3>
          <ProductList />
        </div>
        <CartPanel />
      </div>
    </>
  )
}

export default function MiniAppExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 10: Mini App (Tổng hợp)</h2>
      <p>
        Có đủ AuthContext, CartContext, ProductContext, kèm loading/error và notification global.
      </p>
      <NotificationProvider>
        <AuthProvider>
          <ProductProvider>
            <CartProvider>
              <MiniAppContent />
            </CartProvider>
          </ProductProvider>
        </AuthProvider>
      </NotificationProvider>
    </section>
  )
}
