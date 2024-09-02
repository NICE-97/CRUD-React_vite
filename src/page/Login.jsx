import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "username": event.target.username.value,
    "password": event.target.password.value,
    "expiresIn": 600000
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if (result.status === "ok") {
            alert(result.message)
            localStorage.setItem('token', result.accessToken)
            window.location.href="/profile"
        }else if (result.status === "error") {
            alert(result.message)
        }
    })
    .catch((error) => console.error(error));
  }
  return (
    <div>
        <div className='font-bold text-xl'>
            Login
        </div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="text" id="username" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                </div>
                <div>
                    <Link to="/register" className="inline-flex items-center px-4 py-2 mb-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create User</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login
