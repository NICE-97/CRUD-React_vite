import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Users from './page/Users'
import Register from './page/register'
import Updateinfo from './page/Updateinfo'

function App() {
  const [count, setCount] = useState(0)
  const [ idUser, setIdUser ] = useState();

  const handleGetId = (id) => {
    setIdUser(id)
    console.log(id);
  }

  return (
    <>
      <div className='text-lg font-black'>
        CRUD
      </div>
      <Routes>
        <Route path="/" element={<Users handleGetId={handleGetId}/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/updateinfo' element={<Updateinfo idUser={idUser}/>}/>
      </Routes>
    </>
  )
}

export default App
