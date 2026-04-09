import { useTodos } from '../TodoGlobal'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useTodos()

  return (
    <div className="demo-card">
      <h3>TodoList</h3>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}
