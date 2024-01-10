import React, { FC } from 'react'
import { ExpensesData } from '../model/model'
import { Trash2 } from 'lucide-react'
import axios from 'axios'

interface Item {
	item: ExpensesData
	expensesList: ExpensesData[],
	setExpensesAll: React.Dispatch<React.SetStateAction<ExpensesData[]>>
	getExpense:() => void;
}

const ItemExpenses: FC<Item> = ({ item, getExpense  }) => {

	const handleDelete = async (id: number) => {
		try {
			const response = await axios.delete(`http://localhost:4000/api/v3/expenses/deleteExpense/${id}`)
			if (response.data.statusCode === 200) {
				getExpense();
			}
		} catch (err: any) {
			console.log(err.message)
		}
	}

	return (
		<div className={`w-[100%] bg-[#262626] p-4 rounded mt-4 min-h-[50px]`}
		>
			<form className='flex justify-between w-full pr-1'>
				<div className="input-field-style flex-wrap">
					<span className='text-white  flex-wrap mx-1'>Amount : {item.amount} |</span>
					<span className='text-white  flex-wrap mx-1'>Date : {item.expDate} |</span>
					<span className='text-white  flex-wrap mx-1'>Category : {item.category}</span>
				</div>

				<div className='flex'>
					<p className='text-white ml-3 cursor-pointer' onClick={() => { handleDelete(item.id) }}><Trash2 /></p>
				</div>
			</form>
		</div>
	)
}

export default ItemExpenses