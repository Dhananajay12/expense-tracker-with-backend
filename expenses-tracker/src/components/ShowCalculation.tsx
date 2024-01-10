import React, { FC, FormEvent } from 'react'
import { ExpensesData } from '../model/model'

interface Props {
	show: ExpensesData[];
	budget: number,
	setBudget: React.Dispatch<React.SetStateAction<number>>,
	handleSubmit: (e: FormEvent) => void,
	showBudget: number
}

const ShowCalculation: FC<Props> = ({ show, budget, setBudget, handleSubmit, showBudget }) => {

	const total = show.reduce((a: any, b: any) => {
		return a + b.amount
	}, 0)


	return (
		<>
			<div className='mt-4 p-4 bg-[#252525] m-1 rounded'>
				<p className='text-red-600 font-bold'> {total > showBudget && 'Please check Budget for this month'}</p>
				<div className='bg-[#121212] text-white px-4 h-20 rounded p-3 mt-2'>
					<h1>Total Expenses: {total}</h1>
				</div>
				<div className='bg-[#121212] text-white px-4 h-20 rounded p-3 mt-2'>
					<h1>Total Budget: {showBudget}</h1>
				</div>
				<form onSubmit={handleSubmit} className='w-full mt-4'>
					<label className='text-white'>Enter Budget</label>
					<input type='number' aria-label='Budget' placeholder='Enter Budget for current month ' className='w-full border border-gray-600/70 p-2 mt-2 rounded' value={budget} onChange={(e) => setBudget(parseInt(e.target.value, 10))} />
					<br></br>
					<button type='submit' className='w-full border border-gray-600/70 mt-2 p-1 text-white' >Submit </button>
				</form>
			</div>

		</>
	)
}

export default ShowCalculation