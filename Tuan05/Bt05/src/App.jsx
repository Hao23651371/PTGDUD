import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import ShopHome from './components/ShopHome'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Profile from './components/Profile'
import Orders from './components/Orders'
import DashboardLayout from './components/DashboardLayout'
import DashboardProfile from './components/DashboardProfile'
import DashboardOrders from './components/DashboardOrders'
import DashboardSettings from './components/DashboardSettings'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <main className="router-demo">
          <h1>React Router Exercises</h1>

          <nav className="menu menu-wrap">
            <Link to="/">Shop Home</Link>
            <span>|</span>
            <Link to="/products">Products</Link>
            <span>|</span>
            <Link to="/cart">Cart</Link>
            <span>|</span>
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/profile">Profile</Link>
            <span>|</span>
            <Link to="/dashboard">Dashboard</Link>
            <span>|</span>
            <Link to="/about">About</Link>
            <span>|</span>
            <Link to="/contact">Contact</Link>
          </nav>

          <section className="page">
            <Routes>
              <Route path="/" element={<ShopHome />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardProfile />} />
                <Route path="profile" element={<DashboardProfile />} />
                <Route path="orders" element={<DashboardOrders />} />
                <Route path="settings" element={<DashboardSettings />} />
              </Route>
              <Route path="/not-found" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
