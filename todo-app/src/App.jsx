import "./styles.css";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleDoubleClick(id) {
    const todo = todos.find((todo) => todo.id === id);
    setEditingId(id);
    setEditText(todo.title);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function handleEditSubmit(e, id) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: editText };
        }
        return todo;
      });
    });
    setEditingId(null);
    setEditText("");
  }

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <hr className="solid-break" />
      <ul className="list">
        {todos.length === 0 && <li>No items</li>}
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li>
                {editingId === todo.id ? (
                  <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
                    <input
                      type="text"
                      value={editText}
                      onChange={handleEditChange}
                      onBlur={(e) => handleEditSubmit(e, todo.id)}
                      autoFocus
                    />
                  </form>
                ) : (
                  <label onDoubleClick={() => handleDoubleClick(todo.id)}>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    <span>{todo.title}</span>
                  </label>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </button>
              </li>
              <hr className="solid-break-light" />
            </div>
          );
        })}
      </ul>
    </>
  );
}
