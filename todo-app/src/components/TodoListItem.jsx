import "./TodoListItem.css";
export default function TodoItem({
  todo,
  editingId,
  editText,
  handleEditSubmit,
  handleEditChange,
  handleDoubleClick,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className="itemList">
      {editingId === todo.id ? (
        <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
          <input
            type="text"
            className="editInput"
            value={editText}
            onChange={handleEditChange}
            onBlur={(e) => handleEditSubmit(e, todo.id)}
            autoFocus
          />
        </form>
      ) : (
        <label onDoubleClick={() => handleDoubleClick(todo.id)}>
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => toggleTodo(todo.id, e.target.checked)}
          />
          <span className={todo.completed ? "completed" : ""}>
            {todo.title}
          </span>
        </label>
      )}
      <button
        className="del"
        title="Delete item"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </li>
  );
}
