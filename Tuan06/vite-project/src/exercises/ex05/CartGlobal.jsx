import { createContext, useContext, useMemo, useReducer } from 'react'

const products = [
  { id: 1, name: 'Tai nghe', price: 650000 },
  { id: 2, name: 'Bàn phím cơ', price: 1500000 },
  { id: 3, name: 'Chuột không dây', price: 420000 },
]

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((item) => item.id === action.payload)
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }
      }
      return { ...state, items: [...state.items, { id: action.payload, quantity: 1 }] }
    }
    case 'inc':
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)),
      }
    case 'dec':
      return {
        ...state,
        items: state.items
          .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((item) => item.quantity > 0),
      }
    default:
      return state
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const detailedItems = state.items.map((item) => {
    const product = products.find((p) => p.id === item.id)
    return {
      ...item,
      name: product.name,
      price: product.price,
      lineTotal: item.quantity * product.price,
    }
  })

  const total = detailedItems.reduce((sum, item) => sum + item.lineTotal, 0)

  const value = useMemo(
    () => ({
      products,
      items: detailedItems,
      total,
      addToCart: (id) => dispatch({ type: 'add', payload: id }),
      increaseQty: (id) => dispatch({ type: 'inc', payload: id }),
      decreaseQty: (id) => dispatch({ type: 'dec', payload: id }),
    }),
    [detailedItems, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}

function ProductList() {
  const { products, addToCart } = useCart()
  return (
    <div className="demo-card">
      <h3>Sản phẩm</h3>
      <ul className="list-plain">
        {products.map((product) => (
          <li key={product.id} className="row between">
            <span>
              {product.name} - {product.price.toLocaleString('vi-VN')}đ
            </span>
            <button type="button" onClick={() => addToCart(product.id)}>
              Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CartSummary() {
  const { items, total, increaseQty, decreaseQty } = useCart()
  return (
    <div className="demo-card">
      <h3>Giỏ hàng</h3>
      {items.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <ul className="list-plain">
          {items.map((item) => (
            <li key={item.id} className="row between">
              <span>
                {item.name} x {item.quantity} = {item.lineTotal.toLocaleString('vi-VN')}đ
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
      )}
      <p>
        <strong>Tổng tiền: {total.toLocaleString('vi-VN')}đ</strong>
      </p>
    </div>
  )
}

export default function CartGlobalExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 5: Cart Global</h2>
      <p>Thêm sản phẩm, tăng giảm số lượng và tính tổng tiền bằng global state.</p>
      <CartProvider>
        <div className="grid two-col">
          <ProductList />
          <CartSummary />
        </div>
      </CartProvider>
    </section>
  )
}
