import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [allUsers, setAllUsers] = useContext(AuthContext)

  const updateTaskStatus = (taskIndex, nextState) => {
    const employee = props.data
    if(!employee) return

    const updatedTasks = employee.tasks.map((task, idx) => {
      if(idx !== taskIndex) return task
      return {
        ...task,
        isActive: nextState === 'active',
        isCompleted: nextState === 'completed',
        isFailed: nextState === 'failed',
        isNew: nextState === 'new'
      }
    })

    const summary = employee.taskSummary || { isNew: 0, isActive: 0, isCompleted: 0, isFailed: 0 }
    const newSummary = { ...summary }
    // Recalculate summary from updated tasks for correctness
    newSummary.isNew = updatedTasks.filter(t => t.isNew).length
    newSummary.isActive = updatedTasks.filter(t => t.isActive).length
    newSummary.isCompleted = updatedTasks.filter(t => t.isCompleted).length
    newSummary.isFailed = updatedTasks.filter(t => t.isFailed).length

    const updatedEmployee = { ...employee, tasks: updatedTasks, taskSummary: newSummary }

    // Update global context for this employee
    const updatedAll = allUsers.map(u => u.id === employee.id ? updatedEmployee : u)
    setAllUsers(updatedAll)

    // Update logged in user
    props.updateData(updatedEmployee)
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
  }

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} onUpdateTaskStatus={updateTaskStatus} />
    </div>
  )
}

export default EmployeeDashboard
