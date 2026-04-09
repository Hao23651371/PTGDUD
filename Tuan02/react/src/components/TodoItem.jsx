function TodoItem({ todo, index, deleteTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(index)}>Xóa</button>
    </li>
  );
}

export default TodoItem;
