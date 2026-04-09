import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const value = useMemo(
    () => ({
      user,
      login: (username) => setUser({ username }),
      logout: () => setUser(null),
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}

function AuthForm() {
  const [name, setName] = useState('')
  const { login, logout, user } = useAuth()

  return (
    <div className="demo-card">
      <h3>Auth Controls</h3>
      <div className="column gap-sm">
        <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Nhập username" />
        {!user ? (
          <button type="button" onClick={() => name.trim() && login(name.trim())}>
            Login (giả lập)
          </button>
        ) : (
          <button type="button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

function HeaderUser() {
  const { user } = useAuth()
  return <p>Header component: {user ? user.username : 'Chưa đăng nhập'}</p>
}

function SidebarUser() {
  const { user } = useAuth()
  return <p>Sidebar component: {user ? user.username : 'Guest'}</p>
}

export default function FakeAuthExercise() {
  return (
    <section className="exercise-block">
      <h2>Bài 3: Auth giả lập</h2>
      <p>Global state user được hiển thị ở nhiều component khác nhau.</p>
      <AuthProvider>
        <div className="demo-card">
          <HeaderUser />
          <SidebarUser />
        </div>
        <AuthForm />
      </AuthProvider>
    </section>
  )
}
