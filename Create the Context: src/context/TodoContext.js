import React, { createContext, useState } from 'react';

// Create Context
export const TodoContext = createContext();

// Create a Provider Component
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), text: todo }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = (id, updatedText) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo)));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
