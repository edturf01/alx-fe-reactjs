import React from "react";

function TodoList({ todos = [], toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span
            onClick={() => toggleTodo && toggleTodo(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            data-testid={`todo-text-${index}`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo && deleteTodo(index)}
            data-testid={`delete-btn-${index}`}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
