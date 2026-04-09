import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function AuthPanel() {
  const [username, setUsername] = useState('student')
  const { user, login, logout } = useAuth()

  return (
    <div className="demo-card">
      <h3>Auth global</h3>
      {!user ? (
        <div className="row gap-sm">
          <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="username" />
          <button type="button" onClick={() => login(username || 'student')}>
            Login
          </button>
        </div>
      ) : (
        <div className="row between">
          <p>Xin chào, {user.username}</p>
          <button type="button" className="danger" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
