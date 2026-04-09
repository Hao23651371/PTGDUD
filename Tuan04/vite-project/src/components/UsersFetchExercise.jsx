import { useEffect, useState } from 'react'

function UsersFetchExercise() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error('Không tải được users')
        }

        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Đã có lỗi xảy ra')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return (
    <section className="card">
      <h2>Bài 1 - Fetch Users</h2>
      <p>Bài 2: loading và error.</p>

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default UsersFetchExercise
