import { createContext, useContext, useMemo, useReducer } from 'react'

const UsersContext = createContext(null)

const initialState = {
  data: [],
  loading: false,
  error: null,
}

function usersReducer(state, action) {
  switch (action.type) {
    case 'fetchStart':
      return { ...state, loading: true, error: null }
    case 'fetchSuccess':
      return { data: action.payload, loading: false, error: null }
    case 'fetchError':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  const fetchUsers = async () => {
    dispatch({ type: 'fetchStart' })
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Không thể tải danh sách user')
      }
      const users = await response.json()
      dispatch({ type: 'fetchSuccess', payload: users })
    } catch (error) {
      dispatch({ type: 'fetchError', payload: error.message })
    }
  }

  const value = useMemo(() => ({ ...state, fetchUsers }), [state])

  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}

function useUsers() {
  const context = useContext(UsersContext)
  if (!context) {
    throw new Error('useUsers must be used inside UsersProvider')
  }
  return context
}

function UsersContent() {
  const { data, loading, error, fetchUsers } = useUsers()
  return (
    <div className="demo-card">
      <button type="button" onClick={fetchUsers}>
        Fetch Users
      </button>

      {loading && <p className="status loading">Loading spinner...</p>}
      {error && <p className="status error">Error: {error}</p>}

      <ul className="list-plain">
        {data.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default function FetchUsersGlobalExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 7: Fetch Users (Global Async)</h2>
      <p>State gồm data/loading/error và hiển thị loading + lỗi + danh sách user.</p>
      <UsersProvider>
        <UsersContent />
      </UsersProvider>
    </section>
  )
}
