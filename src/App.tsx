import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">TODO APP</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      { todos && todos.length===0 ?<span className="place-holder"> Add an item </span>: ""}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
