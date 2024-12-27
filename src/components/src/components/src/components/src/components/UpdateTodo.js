import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const UpdateTodo = ({ todo, setIsEditing }) => {
    const { updateTodo } = useContext(TodoContext);
    const [updatedText, setUpdatedText] = useState(todo.text);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (updatedText.trim()) {
            updateTodo(todo.id, updatedText);
            setIsEditing(false);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
            />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
};

export default UpdateTodo;
