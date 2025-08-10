import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.isNew}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.isActive}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.isCompleted}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>

      <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskSummary.isFailed}</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
