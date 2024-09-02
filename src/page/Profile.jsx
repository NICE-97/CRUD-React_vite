import React, { useState, useEffect } from 'react'

function Profile() {
  const [ user, setUser ] = useState({})

  useEffect(() => {
    const tokenid = localStorage.getItem("token")
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${tokenid}`);

    const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        if (result.status === "ok") {
            setUser(result.user)
        }
    })
    .catch((error) => console.error(error));
  }, [])
  
  const handleLogout = () => {
    alert(`Logout success`)
    localStorage.removeItem('token')
    window.location.href='/login'
  }

  return (
    <div>
        Profile
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 mt-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} alt={user.username}/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.fname} {user.lname}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{user.username}</span>
                <div className="flex mt-4 md:mt-6">
                    <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                    {/* <button onClick={()=>handleGetId(user.id)}>
                        <Link to="/updateinfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</Link>
                    </button>
                    <button onClick={()=>handleDelete(user.id)}>
                        <Link to="/" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</Link>
                    </button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
