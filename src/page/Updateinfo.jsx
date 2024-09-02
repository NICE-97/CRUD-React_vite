import React, { useState, useEffect } from "react";

function Updateinfo({ idUser }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://www.melivecode.com/api/users/${idUser}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          setUser(result.user);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "id": idUser,
        "fname": event.target.fname.value,
        "lname": event.target.lname.value,
        "username": event.target.username.value,
        "password": "1234",
        "email": event.target.email.value,
        "avatar": event.target.avatar.value
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/users/update", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          alert(result.message);
          window.location.href="/"
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div className="font-bold text-xl">Update Info</div>
      <div className="mt-10">
        <form onSubmit={handleUpdate} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={user.fname || ""}
              onChange={(event) => {
                setUser((user) => ({
                  ...user,
                  fname: event.target.value
                }));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={user.lname || ""}
              onChange={(event) => {
                setUser((user) => ({
                  ...user,
                  lname: event.target.value
                }));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username || ""}
              onChange={(event) => {
                setUser((user) => ({
                  ...user,
                  username: event.target.value
                }));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email || ""}
              onChange={(event) => {
                setUser((user) => ({
                  ...user,
                  email: event.target.value
                }));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Avatar
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={user.avatar  || ""}
              onChange={(event) => {
                setUser((user) => ({
                  ...user,
                  avatar: event.target.value
                }));
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updateinfo;
