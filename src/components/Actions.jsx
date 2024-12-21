import React, { useContext } from 'react'
import Context from './Context'
function Actions() {
  const {tasks,update_task_array} = useContext(Context)
  function setStatus(status){
    return tasks.map(data =>{return  {...data, status}})
  }
  function handleMarkAllCompconsted(){
    const arr = setStatus("compconsted")
    update_task_array(arr)
  }
  function handleClearAll(){
    const arr =  setStatus("active")
    update_task_array(arr)
  }
  return (
    <div className='flex-1 flex justify-center items-center flex-col'>
      <h1>Actions</h1>
      <button onClick={handleMarkAllCompconsted} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 ' >Mark All Compconsted</button>
      <button onClick={handleClearAll} className='bg-blue-500 border-white border-[1px] rounded-md text-white w-[150px] p-2 '>Clear Compconsted</button>
    </div>
  )
}
export default Actions