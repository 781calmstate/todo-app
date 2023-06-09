import React from "react";
import "./style.css";
import { Todo } from "../../model";
import TodoItem from "../TodoItem/TodoItem";
import { Droppable } from "react-beautiful-dnd";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos,
    toggleTodo
}) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos ${
                            snapshot.isDraggingOver ? "dragactive" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Active Tasks</span>
                        {todos.map((todo, index) => (
                            <TodoItem
                                toggleTodo={toggleTodo}
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${
                            snapshot.isDraggingOver ? "dragcomplete" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">Completed Tasks</span>
                        {completedTodos.map((todo, index) => (
                            <TodoItem
                                toggleTodo={toggleTodo}
                                index={index}
                                key={todo.id}
                                todo={todo}
                                todos={completedTodos}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;
