import React, { FC, useEffect, useState } from 'react'
import ShowCalculation from '../components/ShowCalculation'
import InputForm from '../components/InputForm'
import ExpensesList from '../components/ExpensesList'
import { ExpensesData } from '../model/model'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home: FC = () => {


	const [expenses, setExpenses] = useState<ExpensesData>({
		id: 0,
		expDate: '',
		amount: 0,
		category: 'food',
	})

	const navigate = useNavigate();
	const [expensesAll, setExpensesAll] = useState<ExpensesData[]>([])
	const [budget, setBudget] = useState<number>(0)
	const [budgetShow, setBudgetShow] = useState<number>(0)


	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();
			if (!expenses.expDate) {
				alert("Please Select a date")
				return
			}

			if (expenses) {
				const response = await axios.post(`http://localhost:4000/api/v3/expenses/create`, expenses)
				if (response.data.statusCode === 200) {
					alert("Successfully created")
					getExpense()
				}
			}
		} catch (err: any) {
			alert(err.message)
		}
	}



	const getExpense = async () => {
		try {
			const response = await axios.get(`http://localhost:4000/api/v3/expenses/getExpenses`)
			if (response.data.statusCode === 200) {
				setExpensesAll(response.data.data);
			}
		} catch (err: any) {
			alert(err.message)
		}
	}

	const submitBudget = (e: React.FormEvent) => {
		e.preventDefault();
		if (budget) {
			setBudgetShow(budget)
			localStorage.setItem('showBudget', JSON.stringify(budget))
			setBudget(0)
		}
	}
	const logout = () => {
		localStorage.removeItem('loggedIn')
		navigate('/login')
	}

	useEffect(() => {
		getExpense();
	}, [])


	return (
		<>
			<button className='text-white bg-black p-2 rounded' onClick={() => logout()}> Logout</button>
			<div className='grid  grid-cols-1  md:grid-cols-2 '>
				<ShowCalculation show={expensesAll} showBudget={budgetShow} budget={budget} setBudget={setBudget} handleSubmit={submitBudget} />
				<InputForm expenses={expenses} setExpenses={setExpenses} handleSubmit={handleSubmit} />
			</div>
			<ExpensesList getExpense={getExpense} expensesList={expensesAll} setExpensesAll={setExpensesAll} />
		</>

	)
}

export default Home