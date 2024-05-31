import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function Form() {
    const [text, setText] = useState("");
    const { addTodo } = useTodo();
    const add = (e) => {
        e.preventDefault();
        addTodo({
            id: Date.now(),
            text,
            completed: false
        })
        console.log(text);
        setText("");
    };
    return (
        <>
            <form className='max-w-[1200px] my-3 mx-auto bg-[#222] p-5 flex text-md justify-center'
                onSubmit={add}
            >
                <input type='text' placeholder='to-do' className='py-1 px-3 mr-3 w-1/3 rounded-full' value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button
                    type='submit'
                    className='rounded-full bg-slate-300 flex items-center justify-center text-md w-[3%] aspect-square shrink-0'
                >
                    ➡️
                </button>
            </form>
        </>
    )
}

export default Form