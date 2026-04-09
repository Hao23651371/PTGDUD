import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/profile'

  const handleLogin = () => {
    const value = username.trim()
    if (!value) return
    login(value)
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h2>Login</h2>
      <p>Nhap username de dang nhap.</p>
      <div className="inline-form">
        <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
