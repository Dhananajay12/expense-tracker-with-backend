import React, { FC, FormEvent } from 'react'
import { ExpensesData } from '../model/model'

interface InputForm {
	expenses: ExpensesData,
	setExpenses: React.Dispatch<React.SetStateAction<ExpensesData>>,
	handleSubmit: (e: FormEvent) => void
}


const InputForm: FC<InputForm> = ({ expenses, setExpenses, handleSubmit }) => {

	return (
		<div className='mt-4 p-4 bg-[#252525] m-1 rounded '>

			<h1 className='font-bold text-2xl text-white'>Add Expenses</h1>
			<form onSubmit={handleSubmit}>
				<div className='mt-4'>
					<label className='text-white'>Enter Amount</label>
					<input type='number' name='amount' placeholder='amount' className='border border-gray-600/70 p-2 ml-1 mt-3 w-full rounded' value={expenses.amount} onChange={(e) => setExpenses({ ...expenses, amount: parseInt(e.target.value, 10) })} />
				</div>
				<div className='mt-2'>
					<label className='text-white'>Select Date</label>
					<input type='date' name='date' placeholder='date' className='border  border-gray-600/70  p-2 ml-1   mt-3  w-full rounded' value={expenses.expDate} onChange={(e) => setExpenses({ ...expenses, expDate: e.target.value })} />
				</div>

				<div className='mt-2'>
					<label className='text-white'>Select Category</label>
					<select name='category'
						className='border  border-gray-600/70  p-2 ml-1  w-full  mt-3'
						value={expenses.category}
						onChange={(e) => setExpenses({ ...expenses, category: e.target.value })}
					>
						<option value='food'>food</option>
						<option value='transportation'>transportation</option>
						<option value='shopping'>shopping</option>
					</select>
				</div>
				<br></br>
				<button type='submit' className='border  border-gray-600/70  p-2 ml-1 w-full mt-4 rounded text-white '>Submit</button>
			</form>
		</div>
	)
}

export default InputForm