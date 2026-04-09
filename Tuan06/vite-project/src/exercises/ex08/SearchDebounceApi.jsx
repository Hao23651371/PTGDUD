import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const SearchContext = createContext(null)

const initialState = {
  query: '',
  results: [],
  loading: false,
  error: null,
}

function searchReducer(state, action) {
  switch (action.type) {
    case 'setQuery':
      return { ...state, query: action.payload }
    case 'start':
      return { ...state, loading: true, error: null }
    case 'success':
      return { ...state, loading: false, results: action.payload, error: null }
    case 'error':
      return { ...state, loading: false, error: action.payload }
    case 'clear':
      return { ...state, results: [], loading: false, error: null }
    default:
      return state
  }
}

function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState)

  useEffect(() => {
    const query = state.query.trim()
    if (!query) {
      dispatch({ type: 'clear' })
      return undefined
    }

    const timer = setTimeout(async () => {
      dispatch({ type: 'start' })
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
        if (!response.ok) {
          throw new Error('Search API thất bại')
        }
        const data = await response.json()
        dispatch({ type: 'success', payload: data.products || [] })
      } catch (error) {
        dispatch({ type: 'error', payload: error.message })
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [state.query])

  const value = useMemo(
    () => ({
      ...state,
      setQuery: (text) => dispatch({ type: 'setQuery', payload: text }),
    }),
    [state],
  )

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used inside SearchProvider')
  }
  return context
}

function SearchPanel() {
  const { query, results, loading, error, setQuery } = useSearch()
  return (
    <div className="demo-card">
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tìm sản phẩm..." />
      {loading && <p className="status loading">Đang tìm kiếm...</p>}
      {error && <p className="status error">{error}</p>}
      <ul className="list-plain">
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default function SearchDebounceApiExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 8: Search + Debounce + API</h2>
      <p>Gọi API sau khi user dừng gõ và lưu kết quả vào global state.</p>
      <SearchProvider>
        <SearchPanel />
      </SearchProvider>
    </section>
  )
}
