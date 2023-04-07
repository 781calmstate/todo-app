import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../model";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline, MdDone } from "react-icons/md";
import "./style.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({
    index,
    todo,
    todos,
    setTodos,
    toggleTodo
}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.title);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const { title, id, isDone } = todo;

    const handleDone = (id: number) => {
        toggleTodo(id);
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (id: number, e?: React.FormEvent) => {
        e && e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, title: editTodo } : todo
            )
        );
        setEdit(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (editTodo === "") {
            handleDelete(id);
            return;
        }
        handleEdit(id, e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTodo(e.target.value);
    };

    const handleEditClick = () => {
        if (editTodo === "") {
            handleDelete(id);
            return;
        }
        if (!edit && !isDone) {
            setEdit(!edit);
        } else {
            setEdit(!edit);
            handleEdit(id);
        }
    };

    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    className={`todoItem ${snapshot.isDragging ? "drag" : ""}`}
                    onSubmit={handleSubmit}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {edit ? (
                        <input
                            ref={inputRef}
                            value={editTodo}
                            onChange={handleChange}
                            className="todoItem__text"
                        />
                    ) : todo.isDone ? (
                        <s className="todoItem__text">{title}</s>
                    ) : (
                        <span className="todoItem__text">{title}</span>
                    )}

                    <div>
                        <span className="icon" onClick={handleEditClick}>
                            <AiOutlineEdit />
                        </span>
                        <span className="icon" onClick={() => handleDelete(id)}>
                            <MdOutlineDeleteOutline />
                        </span>
                        <span className="icon" onClick={() => handleDone(id)}>
                            <MdDone />
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default TodoItem;
