import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("adds and removes todos", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "Test Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Test Task")).toBeInTheDocument();

  const removeButton = screen.getByText("Remove");
  fireEvent.click(removeButton);

  expect(screen.queryByText("Test Task")).toBeNull();
});
