import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const ProductContext = createContext(null)

const initialState = {
  data: [],
  loading: false,
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...state, loading: true, error: null }
    case 'success':
      return { data: action.payload, loading: false, error: null }
    case 'error':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch({ type: 'start' })
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12')
        if (!response.ok) {
          throw new Error('Không thể tải sản phẩm')
        }
        const data = await response.json()
        dispatch({ type: 'success', payload: data.products || [] })
      } catch (error) {
        dispatch({ type: 'error', payload: error.message })
      }
    }

    fetchProducts()
  }, [])

  const value = useMemo(() => ({ ...state }), [state])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used in ProductProvider')
  }
  return context
}
