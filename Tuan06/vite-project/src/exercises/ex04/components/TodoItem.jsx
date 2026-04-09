import { useState } from 'react'
import { useTodos } from '../TodoGlobal'

export default function TodoItem({ todo }) {
  const [draft, setDraft] = useState(todo.text)
  const { removeTodo, startEdit, saveEdit, cancelEdit } = useTodos()

  return (
    <li className="todo-item">
      {todo.editing ? (
        <>
          <input value={draft} onChange={(event) => setDraft(event.target.value)} />
          <button type="button" onClick={() => saveEdit(todo.id, draft)}>
            Lưu
          </button>
          <button type="button" className="secondary" onClick={() => cancelEdit(todo.id)}>
            Hủy
          </button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button type="button" onClick={() => startEdit(todo.id)}>
            Sửa
          </button>
          <button type="button" className="danger" onClick={() => removeTodo(todo.id)}>
            Xóa
          </button>
        </>
      )}
    </li>
  )
}
