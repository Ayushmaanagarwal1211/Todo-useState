import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch } from 'react-redux'
import { fill } from '../reducer/slice'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Actions from './components/Actions'
import RemainingTodos from './components/RemainingTodos'
import FilterByStatus from './components/FilterByStatus'
import FilterByColor from './components/FilterByColor'
import Context from './components/Context'
import { getDateFromBackend, setDataToBackend } from '../service/localStorage'


function App() {
  let [tasks,setTasks] = useState(getDateFromBackend())
  let [choices,setChoices] = useState([])
  let [filter,setFilter] = useState("all")
  setDataToBackend(tasks)
  return (
    <>
    <Context.Provider value={{tasks,setTasks,filter,setFilter,choices,setChoices}}>
      <div className='bg-gray-200 pt-[100px] w-[100vw] h-[100vh] ' style={{margin:"0px"}}>
        <div className=' bg-white  w-[80vw] m-auto h-[80vh] rounded-md'>
          <h1 className='text-red-500 font-bold text-center text-[30px]'>Todos</h1>
            <Input/>
          <div className='h-[60%] overflow-scroll'>
            <Tasks/>
          </div>
          <div className=' h-[25%] flex gap-0 w-[100%]'>
            <Actions/>
            <RemainingTodos/>
            <FilterByStatus/>
            <FilterByColor/>
          </div>
        </div>
      </div>
    </Context.Provider>
    </>
  )
}

export default App
