import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users({ handleGetId }) {
  const [ users,setUsers ] = useState([])

  useEffect(() => {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

        fetch("https://www.melivecode.com/api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setUsers(result);
        })
        .catch((error) => console.error(error));

  }, [])

  const handleDelete = (id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": id
    });

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok")
          alert(result.message);
          window.location.reload()
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div className='font-bold text-xl'>
        users
      </div>
      <div>
       <div>
        <Link to="/register" className="inline-flex items-center px-4 py-2 mb-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create User</Link>
       </div>
       <div>
        <Link to="/login" className="inline-flex items-center px-4 py-2 mb-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
       </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {users.map((user, index) => {
            return(
                <div key={`${index}-${user.username}`} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10 mt-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} alt={user.username}/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.fname} {user.lname}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user.username}</span>
                        <div className="flex mt-4 md:mt-6">
                            <button onClick={()=>handleGetId(user.id)}>
                              <Link to="/updateinfo" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</Link>
                            </button>
                            <button onClick={()=>handleDelete(user.id)}>
                              <Link to="/" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Users
