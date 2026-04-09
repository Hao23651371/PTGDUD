import { useEffect, useState } from 'react'

function TodosCrudExercise() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true)
        setError('')
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')

        if (!response.ok) {
          throw new Error('Không tải được todo list')
        }

        const data = await response.json()
        setTodos(data)
      } catch (fetchError) {
        setError(fetchError.message || 'Đã có lỗi xảy ra')
      } finally {
        setLoading(false)
      }
    }

    fetchTodos()
  }, [])

  const handleAddTodo = async (event) => {
    event.preventDefault()
    const title = newTodo.trim()
    if (!title) return

    try {
      setSubmitting(true)
      setError('')

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, completed: false, userId: 1 }),
      })

      if (!response.ok) {
        throw new Error('Không thêm được todo')
      }

      const createdTodo = await response.json()
      setTodos((currentTodos) => [{ ...createdTodo, title, completed: false }, ...currentTodos])
      setNewTodo('')
    } catch (addError) {
      setError(addError.message || 'Đã có lỗi xảy ra')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDeleteTodo = async (id) => {
    const previousTodos = todos
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Không xóa được todo')
      }
    } catch (deleteError) {
      setTodos(previousTodos)
      setError(deleteError.message || 'Đã có lỗi xảy ra')
    }
  }

  return (
    <section className="card">
      <h2>Bài 5 - CRUD todo</h2>

      <form className="row" onSubmit={handleAddTodo}>
        <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Nhập todo" />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Đang thêm...' : 'Thêm'}
        </button>
      </form>

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">Error: {error}</p>}

      {!loading && (
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-row">
              <span>{todo.title}</span>
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default TodosCrudExercise
