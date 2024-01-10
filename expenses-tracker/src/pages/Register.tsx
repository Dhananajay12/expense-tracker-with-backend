import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const history = useNavigate()

	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();

			const response = await axios.post(`http://localhost:4000/api/v3/auth/register`, { fullName: name , email ,password})
			if (response.data.statusCode === 200) {
				localStorage.setItem("loggedIn", "yes");
				history('/')
			}
		} catch (err: any) {
			alert("please check server")
			console.log(err.message);
		}
	}

	return (
		<div className=' flex justify-center items-center ' >
			<form onSubmit={handleSubmit} className='bg-[#434343] w-[350px] p-3 rounded'>
				<h1 className='text-white text-2xl'>Register</h1>
				<input placeholder='Enter Name' className='mt-5 w-full p-2 rounded' value={name} onChange={(e) => setName(e.target.value)} /><br></br>
				<input placeholder='Enter Email' className='mt-5 w-full p-2 rounded' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
				<input placeholder='Enter Password' className='mt-5  w-full p-2 rounded' value={password} onChange={(e) => setPassword(e.target.value)} /> <br></br>
				<button type="submit" className='mt-5  w-full mb-4 p-2 border  text-white rounded'>submit</button>
				<Link to='/register' className='text-white text-md'>Dont have account?</Link>
			</form>
		</div>
	)
}

export default Register