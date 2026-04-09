import { useEffect, useState } from 'react'

function PostsSearchExercise() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
          throw new Error('Không tải được danh sách posts')
        }

        const data = await response.json()
        setPosts(data)
      } catch (fetchError) {
        setError(fetchError.message || 'Đã có lỗi xảy ra')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className="card">
      <h2>Bài 4 - Search post</h2>
      <div className="row">
        <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search title" />
      </div>

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list">
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <div>{post.body}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default PostsSearchExercise
