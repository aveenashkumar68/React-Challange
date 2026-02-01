import React from 'react'
import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0)
    
    let status = "low";
    let statusColor = "text-green-500"
    if(count < 5) {
        status = "low"
        statusColor = "text-green-500"
    } else if( count >= 5 && count < 10) {
        status = "intermediate"
        statusColor = "text-yellow-500"
    } else {
        status = "high"
        statusColor = "text-red-500"
    }
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
        <h2 className='text-2xl font-bold'>Counter: {count}</h2>
        <p className={`text-lg font-semibold ${statusColor}`}>Status: {status}</p>
        <div className='flex gap-3'>
            <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          ➕
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
          onClick={() => count > 0 && setCount(count - 1)}
          disabled={count === 0}
        >
          ➖
        </button>

        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => setCount(0)}
        >
          🔁
        </button>
        </div>
    </div>
  )
}

export default Counter