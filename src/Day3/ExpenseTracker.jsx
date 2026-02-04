import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("")

    const addExpense = () => {
        if(title.trim() === "" || amount <= 0) return;

        const newExpense = {
            id: Date.now(),
            title,
            amount: Number(amount)
        }
        setExpenses([...expenses, newExpense]);
        setTitle("");
        setAmount("");
    }

    const total = expenses.reduce(
        (sum, expense) => sum+expense.amount, 0
    )
  return (
    <div className='flex justify-center items-center bg-gray-100 h-screen'>
        <div className='w-96 p-6 rounded bg-white shadow'>
            <h1 className='text-center text-xl font-bold mb-4'>Expense Tracker</h1>
            <div className='space-y-3'>
                <input 
                    type="text" 
                    placeholder='Expense name'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    className='border p-2 w-full rounded'
                />
                <input 
                    type="number" 
                    placeholder='Enter amount'
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    className='border p-2 w-full rounded'
                />
                <button onClick={addExpense} className='border rounded w-full text-white p-2 bg-red-500'>Add expense</button>
            </div>

            <ul>
                {expenses.map((expense)=> {
                    return (
                        <li className='flex justify-between p-2 rounded' key={expense.id}>
                            <span className={expense.amount > 1000 ? "text-red-500 font-semibold" : ""}>
                                {expense.title}
                            </span>
                            <span>₹{expense.amount}</span>
                        </li>
                        

                    )
                })}
                    

            </ul>
            <p className="mt-4 text-center font-bold">Total: ₹{total}</p>
        </div>
    </div>
  )
}

export default ExpenseTracker