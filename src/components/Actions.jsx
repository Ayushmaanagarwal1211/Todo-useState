import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import Context from './Context'
export default function Actions() {
  const {tasks,setTasks,after_task_update} = useContext(Context)
  function setStatus(status){
    return tasks.map(data =>{return  {...data, status}})
  }
  function handleMarkAllCompleted(){
    let arr = setStatus("completed")
      setTasks(arr)
      after_task_update(arr)
  }
  function handleClearAll(){
    let arr =  setStatus("active")
    setTasks(arr)
    after_task_update(arr)
  }
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
      <h1>Actions</h1>
      <button onClick={handleMarkAllCompleted} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 ' >Mark All Completed</button>
      <button onClick={handleClearAll} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 '>Clear Completed</button>
    </div>
  )
}
