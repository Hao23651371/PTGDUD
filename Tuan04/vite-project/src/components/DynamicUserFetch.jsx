import { useEffect, useState } from 'react'

function DynamicUserFetch() {
  const [userId, setUserId] = useState('1')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const numericId = Number(userId)

    if (!userId || Number.isNaN(numericId) || numericId < 1 || numericId > 10) {
      setUser(null)
      setError('User not found')
      setLoading(false)
      return undefined
    }

    const fetchUser = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${numericId}`)

        if (!response.ok) {
          throw new Error('User not found')
        }

        const data = await response.json()
        setUser(data)
      } catch (fetchError) {
        setError(fetchError.message || 'User not found')
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [userId])

  return (
    <section className="card">
      <h2>Bài 3 - Fetch theo userId</h2>
      <div className="row">
        <input value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="Nhập userId 1-10" />
      </div>

      {loading && <p className="status loading">Loading...</p>}
      {error && !loading && <p className="status error">{error}</p>}

      {!loading && !error && user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </section>
  )
}

export default DynamicUserFetch
