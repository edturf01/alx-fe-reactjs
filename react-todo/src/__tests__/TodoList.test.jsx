import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders todos correctly", () => {
  const todos = ["Learn React", "Write Tests"];
  render(<TodoList todos={todos} />);

  todos.forEach(todo => {
    expect(screen.getByText(todo)).toBeInTheDocument();
  });
});
