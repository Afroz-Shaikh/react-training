import FilterComponent  from './components/FilterComponent';
import "./styles.css";
import TodoForm from "./components/TodoForm";
import { act, useState } from "react";
import TodoItem from "./components/TodoListItem";

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

  function handleSelecAll(e){
    const allCompleted = todos.every(todo => todo.completed);
   const newTodos = todos.map(todo => ({...todo, completed: !allCompleted}));
    setTodos(newTodos);
  }


function clearAll(){
  setTodos([]);
}

function deleteSelected(){
 const active = todos.filter(todo => !todo.completed);

 setTodos(active);

 
}

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      {/* Filters */}
      
     <FilterComponent   handleSelecAll={handleSelecAll} clearAll={clearAll} deleteSelected={deleteSelected}  />

      {/* Filters */}
      <ul className="list">
        {todos.length === 0 && <li>No items</li>}
        {todos.map((todo) => {
          return (
            <TodoItem 
            key={todo.id}
            todo={todo} 
            editingId={editingId} 
            editText={editText} 
            handleEditSubmit={handleEditSubmit} 
            handleEditChange={handleEditChange} 
            handleDoubleClick={handleDoubleClick} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
          );
        })}
      </ul>
    </>
  );
}
