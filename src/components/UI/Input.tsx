import './Input.css';

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const Input = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
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
