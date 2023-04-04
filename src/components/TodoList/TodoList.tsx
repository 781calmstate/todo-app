import React from 'react';
import './style.css';
import { Todo } from '../../model';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
