import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTasks from '../other/AllTasks'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen bg-[#1C1C1C] w-full p-7'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTasks />
    </div>
  )
}

export default AdminDashboard
