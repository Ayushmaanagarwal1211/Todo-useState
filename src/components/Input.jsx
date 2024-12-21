import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Context from './Context'
import { getDateFromBackend } from '../../service/localStorage'
function genId(){
    let max = -Infinity
    for(let i of getDateFromBackend()){
        max = Math.max(i.id , max)
    }
    return max == -Infinity ? 0 : max+1
  }
export default function Input() {
    let [task,setTask] = useState({task:"",color:"green",status:"active"})
    const { tasks,setTasks,after_task_update}  = useContext(Context)
    function handleChange(e){
        let obj = {...task}
        obj[e.target.name] = e.target.value
        setTask(obj)
    }
    function handleAddTask(e){
        if(e.key == 'Enter'){
            let arr = [...tasks,{...task, id:genId()}]
            setTasks(arr)
            after_task_update(arr)
            setTask({task:"" , color:"green",status:"active"})
        }
    }
  return (
    <div className='w-[100%] flex '>
        <input  onKeyDown={handleAddTask} onChange={handleChange} name='task'  value={task.task} className='h-[20px] border-[1px] p-6 border-gray-200  w-[85%]' placeholder='What Needs to be done ?'></input>
        <select name='color' onChange={handleChange} value={task.color} className='w-[15%] text-center bg-white border-gray-200 border-[1px]'>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="red">Red</option>
        </select>
    </div>
  )
}
