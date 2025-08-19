// src/components/TodoList.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders input and button", () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument();
    expect(screen.getByText(/add/i)).toBeInTheDocument();
  });

  test("adds a todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "Delete Me" } });
    fireEvent.click(button);

    const deleteBtn = screen.getByText(/delete/i);
    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
  });
});
