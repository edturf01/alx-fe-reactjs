import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders todos correctly", () => {
    const todos = [{ text: "Learn React", completed: false }];
    render(<TodoList todos={todos} />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });

  it("applies line-through style to completed todos", () => {
    const todos = [{ text: "Learn React", completed: true }];
    render(<TodoList todos={todos} />);

    const todo = screen.getByText("Learn React");
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  it("calls toggleTodo when todo is clicked", () => {
    const toggleTodo = vi.fn();
    const todos = [{ text: "Learn React", completed: false }];
    render(<TodoList todos={todos} toggleTodo={toggleTodo} />);

    fireEvent.click(screen.getByText("Learn React"));
    expect(toggleTodo).toHaveBeenCalledWith(0);
  });

  it("calls deleteTodo when delete button is clicked", () => {
    const deleteTodo = vi.fn();
    const todos = [{ text: "Learn React", completed: false }];
    render(<TodoList todos={todos} deleteTodo={deleteTodo} />);

    fireEvent.click(screen.getByText("Delete"));
    expect(deleteTodo).toHaveBeenCalledWith(0);
  });
});
