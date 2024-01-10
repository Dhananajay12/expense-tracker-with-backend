import React, { FC } from 'react'
import { ExpensesData } from '../model/model'
import ItemExpenses from './ItemExpenses'


interface Props {
	expensesList: ExpensesData[],
	setExpensesAll: React.Dispatch<React.SetStateAction<ExpensesData[]>>
	getExpense:() => void;
}

const ExpensesList: FC<Props> = ({ expensesList, setExpensesAll, getExpense }) => {
	return (
		<>
			<div className='mt-4 font-bold text-2xl text-white' >Expenses List</div>

			{expensesList.map((item: ExpensesData) => (
				<div key={item.id} className='mt-2'>
					<ItemExpenses getExpense={getExpense} item={item} expensesList={expensesList} setExpensesAll={setExpensesAll} />
				</div>
			))}

		</>
	)
}

export default ExpensesList