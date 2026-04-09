import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const initialProducts = {
  1: { id: 1, name: 'Iphone', price: 25000000 },
  2: { id: 2, name: 'Samsung', price: 19000000 },
  3: { id: 3, name: 'Laptop', price: 32000000 },
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback((product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...currentItems, { ...product, quantity: 1 }]
    })
  }, [])

  const increaseQty = useCallback((id) => {
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }, [])

  const decreaseQty = useCallback((id) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      total,
      addToCart,
      increaseQty,
      decreaseQty,
      clearCart,
      productCatalog: initialProducts,
    }),
    [items, total],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
