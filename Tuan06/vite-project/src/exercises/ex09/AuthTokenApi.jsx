import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const ApiAuthContext = createContext(null)

const initialState = {
  token: localStorage.getItem('ex9-token') || null,
  profile: null,
  loading: false,
  error: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return { ...state, loading: true, error: null }
    case 'success':
      return { ...state, loading: false, token: action.payload.token, profile: action.payload.profile, error: null }
    case 'error':
      return { ...state, loading: false, error: action.payload }
    case 'logout':
      return { token: null, profile: null, loading: false, error: null }
    default:
      return state
  }
}

function ApiAuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.token) {
      localStorage.setItem('ex9-token', state.token)
    } else {
      localStorage.removeItem('ex9-token')
    }
  }, [state.token])

  const login = async (username, password) => {
    dispatch({ type: 'start' })
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, expiresInMins: 30 }),
      })
      if (!response.ok) {
        throw new Error('Sai tài khoản hoặc mật khẩu')
      }
      const authData = await response.json()

      const profileResponse = await fetch('https://dummyjson.com/auth/me', {
        headers: { Authorization: `Bearer ${authData.accessToken}` },
      })
      if (!profileResponse.ok) {
        throw new Error('Không lấy được profile')
      }
      const profile = await profileResponse.json()

      dispatch({ type: 'success', payload: { token: authData.accessToken, profile } })
    } catch (error) {
      dispatch({ type: 'error', payload: error.message })
    }
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  const value = useMemo(() => ({ ...state, login, logout }), [state])

  return <ApiAuthContext.Provider value={value}>{children}</ApiAuthContext.Provider>
}

function useApiAuth() {
  const context = useContext(ApiAuthContext)
  if (!context) {
    throw new Error('useApiAuth must be used inside ApiAuthProvider')
  }
  return context
}

function LoginForm() {
  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
  const { login, loading } = useApiAuth()

  return (
    <div className="column gap-sm">
      <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="username" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" />
      <button type="button" onClick={() => login(username, password)} disabled={loading}>
        {loading ? 'Đang login...' : 'Login API'}
      </button>
    </div>
  )
}

function ProtectedArea() {
  const { token, profile, error, logout } = useApiAuth()

  return (
    <div className="demo-card">
      <h3>Protected Area</h3>
      {!token ? (
        <LoginForm />
      ) : (
        <div className="column gap-sm">
          <p>Token: {token.slice(0, 20)}...</p>
          {profile && <p>User: {profile.firstName} {profile.lastName}</p>}
          <button type="button" onClick={logout}>Logout</button>
        </div>
      )}
      {error && <p className="status error">{error}</p>}
    </div>
  )
}

export default function AuthTokenApiExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 9: Auth + API + Token</h2>
      <p>Login API lấy token, gọi API cần auth, logout xóa token và localStorage.</p>
      <ApiAuthProvider>
        <ProtectedArea />
      </ApiAuthProvider>
    </section>
  )
}
