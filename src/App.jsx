import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const storedUser = JSON.parse(loggedInUser)
      setUser(storedUser.role)
      setLoggedInUserData(storedUser.data)
    }

  },[])
  
  
  const handleLogin = (email, password)=>{
    // Admin login
    if(email === 'admin@example.com' && password === '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    // Employee login
    const employee = userData?.find((employeeItem)=> email === employeeItem.email && password === employeeItem.password)

    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      return
    }

    // Invalid credentials
    alert('Invalid Credentials')
  }



  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} updateData={setLoggedInUserData} /> : null) }
    
    </>
  )
}

export default App
