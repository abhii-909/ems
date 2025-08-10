import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl '>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6 flex justify-center'>
                <button className='w-50 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-semibold py-1 px-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out'>Accept Task</button>
            </div>

        </div>
  )
}

export default NewTask
