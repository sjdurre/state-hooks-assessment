import React from "react";
import Counter from "./Counter";
import TextInput from "./TextInput";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React GitHub Performance Assessment</h1>

      <h2>Task 1: Simple Counter</h2>
      <Counter />

      <h2>Task 2: Text Input</h2>
      <TextInput />

      <h2>Task 3: Todo List</h2>
      <TodoList />
    </div>
  );
}

export default App;
