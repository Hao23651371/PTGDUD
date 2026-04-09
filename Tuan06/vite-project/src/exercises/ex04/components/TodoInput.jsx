import { useState } from 'react'
import { useTodos } from '../TodoGlobal'

export default function TodoInput() {
  const [text, setText] = useState('')
  const { addTodo } = useTodos()

  const handleAdd = () => {
    const value = text.trim()
    if (!value) return
    addTodo(value)
    setText('')
  }

  return (
    <div className="demo-card">
      <h3>TodoInput</h3>
      <div className="row gap-sm">
        <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Nhập todo mới" />
        <button type="button" onClick={handleAdd}>
          Thêm
        </button>
      </div>
    </div>
  )
}
