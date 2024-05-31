import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: "text",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    editTodo: (id, todo) => { },
    toggleComplete: (id) => { }
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
