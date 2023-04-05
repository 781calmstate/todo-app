import React from 'react';
import { Todo } from '../../model';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDeleteOutline, MdDone } from 'react-icons/md';
import './style.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <form className="todoItem">
            {todo.isDone ? (
                <s className="todoItem__text">{todo.todo}</s>
            ) : (
                <span className="todoItem__text">{todo.todo}</span>
            )}

            <div>
                <span className="icon">
                    <AiOutlineEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <MdOutlineDeleteOutline />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default TodoItem;
