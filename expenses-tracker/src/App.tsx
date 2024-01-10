
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { LogIn } from 'lucide-react';
import Login from './pages/Login';
import Register from './pages/Register';

let cureentUser = false;

const RequireAuth = ({ children }: any) => {

	const currentFont = localStorage.getItem("loggedIn");;
	if (currentFont) {
		cureentUser = true;
	}
	else {
		// tostError("Please Login")
		return <Navigate to="/login" />
	}
	return cureentUser ? children : <Navigate to="/" />
}

function App() {

	return (
		<>

			<div className="App">
				<Routes>
					<Route
						path="/"
						element={<RequireAuth>  <Home /> </RequireAuth>}
					></Route>
					<Route
						path="/login"
						element={<Login />}
					></Route>
					<Route
						path="/register"
						element={<Register />}
					></Route>
				</Routes>
			</div>

		</>
	)
}

export default App
