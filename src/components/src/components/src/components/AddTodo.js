import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;