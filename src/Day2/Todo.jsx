import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    const addTodo = () => {
        if (input.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        }

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const toggleTodo = (id) => {
        const udpdatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(udpdatedTodos);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div className='bg-white p-6 rounded w-96'>
                <h1 className='text-xl text-center font-bold mb-6'>Todo App</h1>
                <div className='flex gap-2 mb-4'>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Enter todo...'
                        className='p-2 rounded border flex-1'
                    />
                    <button onClick={addTodo} className='bg-green-600 text-white border px-4 rounded'>Add</button>
                </div>
                <ul className='space-y-2'>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id} className='flex justify-between items-center p-2'>
                                <span className={`${todo.completed ? "line-through text-gray-400" : ""}`}>{todo.text}</span>
                                <div className="flex gap-2">
                                    <button className="text-green-500" onClick={() => toggleTodo(todo.id)}>✓</button>
                                    <button onClick={() => deleteTodo(todo.id)} className="text-red-500">X</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <p className="mt-4 text-center">
                    Remaining Todos:{" "}
                    <span className="font-bold">
                        {todos.filter((todo) => !todo.completed).length}
                    </span>
                </p>

            </div>
        </div>
    )
}

export default Todo