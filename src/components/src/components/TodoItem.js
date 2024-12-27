import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import UpdateTodo from './UpdateTodo';

const TodoItem = ({ todo }) => {
    const { deleteTodo } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <li>
            {isEditing ? (
                <UpdateTodo todo={todo} setIsEditing={setIsEditing} />
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TodoItem;
