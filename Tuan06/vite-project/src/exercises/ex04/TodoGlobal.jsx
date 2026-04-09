import { createContext, useContext, useMemo, useReducer } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const TodoContext = createContext(null)

function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: crypto.randomUUID(), text: action.payload, editing: false }]
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload)
    case 'startEdit':
      return state.map((todo) => (todo.id === action.payload ? { ...todo, editing: true } : todo))
    case 'saveEdit':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text, editing: false } : todo,
      )
    case 'cancelEdit':
      return state.map((todo) => (todo.id === action.payload ? { ...todo, editing: false } : todo))
    default:
      return state
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: crypto.randomUUID(), text: 'Học useContext', editing: false },
    { id: crypto.randomUUID(), text: 'Tách TodoInput/TodoList/TodoItem', editing: false },
  ])

  const value = useMemo(
    () => ({
      todos,
      addTodo: (text) => dispatch({ type: 'add', payload: text }),
      removeTodo: (id) => dispatch({ type: 'remove', payload: id }),
      startEdit: (id) => dispatch({ type: 'startEdit', payload: id }),
      saveEdit: (id, text) => dispatch({ type: 'saveEdit', payload: { id, text } }),
      cancelEdit: (id) => dispatch({ type: 'cancelEdit', payload: id }),
    }),
    [todos],
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used inside TodoProvider')
  }
  return context
}

export default function TodoGlobalExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 4: Todo List Global</h2>
      <p>CRUD todo với global state, component đã tách riêng.</p>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </section>
  )
}
