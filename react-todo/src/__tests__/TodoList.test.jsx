import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  const mockTodos = [
    { text: "Buy milk", completed: false },
    { text: "Walk dog", completed: true },
  ];

  test("renders todos correctly", () => {
    render(<TodoList todos={mockTodos} />);
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Walk dog")).toBeInTheDocument();
  });

  test("applies line-through style to completed todos", () => {
    render(<TodoList todos={mockTodos} />);
    const completedTodo = screen.getByText("Walk dog");
    expect(completedTodo).toHaveStyle("text-decoration: line-through");
  });

  test("calls toggleTodo when todo is clicked", () => {
    const toggleTodo = vi.fn();
    render(<TodoList todos={mockTodos} toggleTodo={toggleTodo} />);
    fireEvent.click(screen.getByText("Buy milk"));
    expect(toggleTodo).toHaveBeenCalledWith(0);
  });

  test("calls deleteTodo when delete button is clicked", () => {
    const deleteTodo = vi.fn();
    render(<TodoList todos={mockTodos} deleteTodo={deleteTodo} />);
    fireEvent.click(screen.getByTestId("delete-btn-0"));
    expect(deleteTodo).toHaveBeenCalledWith(0);
  });
});
