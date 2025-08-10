import React from 'react'

const AcceptTask = ({data}) => {
    // console.log()
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl '>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-600 hover:bg-green-700  text-white rounded-lg font-semibold py-1 px-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out'>Mark as Completed</button>
                <button className=' bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg font-semibold py-1 px-2 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out'>Mark as Failed</button>
            </div>

        </div>
  )
}

export default AcceptTask
