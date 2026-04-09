import { createContext, useContext, useReducer } from 'react'

const CounterContext = createContext(null)

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  const value = {
    count: state.count,
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  }

  return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}

function useCounter() {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter must be used inside CounterProvider')
  }
  return context
}

function CountDisplay() {
  const { count } = useCounter()
  return (
    <div className="demo-card">
      <h3>Component A: Count Display</h3>
      <p className="big-number">{count}</p>
    </div>
  )
}

function CounterActions() {
  const { increment, decrement } = useCounter()
  return (
    <div className="demo-card">
      <h3>Component B: Counter Actions</h3>
      <div className="row gap-sm">
        <button type="button" onClick={decrement}>
          - Giảm
        </button>
        <button type="button" onClick={increment}>
          + Tăng
        </button>
      </div>
    </div>
  )
}

export default function CounterGlobalExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 1: Counter Global</h2>
      <p>Global state quản lý biến count và dùng ở nhiều component.</p>
      <CounterProvider>
        <div className="grid two-col">
          <CountDisplay />
          <CounterActions />
        </div>
      </CounterProvider>
    </section>
  )
}
