import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      const exists = state.find((item) => item.id === action.payload.id)
      if (exists) {
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'inc':
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      )
    case 'dec':
      return state
        .map((item) => (item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    case 'clear':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      total,
      addToCart: (product) => dispatch({ type: 'add', payload: product }),
      increaseQty: (id) => dispatch({ type: 'inc', payload: id }),
      decreaseQty: (id) => dispatch({ type: 'dec', payload: id }),
      clearCart: () => dispatch({ type: 'clear' }),
    }),
    [items, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used in CartProvider')
  }
  return context
}
