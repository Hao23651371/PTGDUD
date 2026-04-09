import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()

  return (
    <div>
      <h2>Profile</h2>
      <p>Xin chao, {user?.username}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}
