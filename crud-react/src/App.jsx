import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import './App.css'
import { addUser, deleteUser, updateUsername } from "./feautres/Users";
import { Plus, XCircle } from "lucide-react"

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");


  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);


  return (
    <div className="App">
      <div className="flex justify-center gap-2 mt-5">
        <input className='m-[5px] p-[5px]' type="text" placeholder='Title..' onChange={(e) => setName(e.target.value)} />
        <input className='m-[5px] p-[5px]' type="text" placeholder='Task..' onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }} className="rounded-md bg-green-500 px-6 py-2 font-semibold text-white shadow-md duration-75 hover:bg-green-400">Add Task<Plus color="white" size={20} /></button>
      </div>

      <div className="displayUser flex justify-center items-center flex-col mt-5">
        {userList.map(user => {
          return <div className=" odd:bg-yellow-100 even:bg-gray-200 text-center w-max p-5 m-5 rounded-[10px] shadow-2xl border border-black" key={user.id}>
            <p className="font-medium text-xl">{user.name}</p>
            <p className="font-normal text-lg">{user.username}</p>
            <div className="mt-5 flex justify-between gap-3">
              <input type="text" placeholder='New Task..' onChange={(e) => setNewUsername(e.target.value)} className="m-[5px] p-[5px]" />
              <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername })) }} className="rounded-md bg-[#38bdf8] py-2 px-2 font-semibold text-white shadow-md duration-75 hover:bg-[#7dd3fc]">Update Username</button>
              <button onClick={() => { dispatch(deleteUser({ id: user.id })) }} className="rounded-md bg-red-500 py-2 px-2 font-semibold text-white shadow-md duration-75 hover:bg-red-400">Delete User</button>
            </div>
          </div>
        })}
      </div>
    </div >

  )
}


export default App
