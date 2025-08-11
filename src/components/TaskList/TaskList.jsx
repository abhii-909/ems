import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data, onUpdateTaskStatus}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx)=>{
        if(elem.isActive){
          return <AcceptTask key={idx} data={elem} onComplete={() => onUpdateTaskStatus(idx, 'completed')} onFail={() => onUpdateTaskStatus(idx, 'failed')} />
        }
        if(elem.isCompleted){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.isNew){
          return <NewTask key={idx} data={elem} onAccept={() => onUpdateTaskStatus(idx, 'active')} />
        }
        if(elem.isFailed){
          return <FailedTask key={idx} data={elem} />
        }
      })}
    </div>
  )
}

export default TaskList
