import React from "react";
import TodoList from "./TodoList"; // ✅ Import the TodoList component

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* ✅ Render the TodoList component */}
    </div>
  );
}

export default App;
