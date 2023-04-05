import { useState } from "react";
import "./App.css";
import Input from "./components/UI/Input";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">ToDo</span>
      <Input todo={todo} setTodo={setTodo} addTodos={addTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
