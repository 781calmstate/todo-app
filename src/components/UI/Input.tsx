import "./Input.css";
import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodos: (e: React.FormEvent) => void;
}

const Input = ({ todo, setTodo, addTodos }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTodos(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__field"
      />
      <button type="submit" className="input__button">
        Add
      </button>
    </form>
  );
};

export default Input;
