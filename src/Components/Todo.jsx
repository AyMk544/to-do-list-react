import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function Todo({ todo }) {
    const { deleteTodo, editTodo, toggleComplete } = useTodo();
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(todo.text)

    return (
        <div className='max-w-[1200px] my-0 mx-auto flex justify-center py-5 text-lg'>
            <input type='checkbox' className='bg-white mr-3 h-6 self-center' checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <input type='text' className={`bg-white text-black rounded-l-full outline-0 px-4 py-1 w-1/2 todo-text ${todo.completed ? 'line-through' : ''}`} readOnly={!editable} value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='bg-white px-2'
                onClick={e => {
                    if (editable) {
                        editTodo(todo.id,
                            {
                                id: todo.id,
                                text,
                                completed: todo.completed
                            });
                        setEditable(false);
                    }
                    else {
                        setEditable(true);
                    }
                }}
            >
                {editable ? "📁" : "✏️"}
            </button>
            <button className='bg-white px-2'
                onClick={() => deleteTodo(todo.id)}
            >🗑️</button>
        </div >
    )
}

export default Todo