import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        
        setNewTask({taskTitle, taskDescription, taskDate, category, isActive:false, isNew:true, isFailed:false, isCompleted:false})

        const data = userData

        data.forEach(function(elem){
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCount.isNew = elem.taskCount.isNew + 1
                
            }
        })
        setUserData(data)
        console.log(data);
        

        setTaskTitle('')
        setTaskDate('')
        setTaskDescription('')
        setCategory('')
        setAssignTo('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-wrap w-full items-start justify-between'
        >
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a ui design' 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Date</h3>
                    <input
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }} 
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Assign To</h3>
                    <input 
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Employee Name' 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Category</h3>
                    <input 
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Design/Dev/etc' 
                    />
                </div>
            </div>

            <div className='w-1/2 flex flex-col items-start'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                    className='w-[600px] h-55 text-sm py-2 px-4 rounded outline-none border-[1px] bg-transparent border-gray-400' name="" id=""></textarea>
                </div>
            </div>

            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
        </form>
    </div>
  )
}

export default CreateTask
