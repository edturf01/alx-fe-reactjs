import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        onClick={toggleTodo}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
