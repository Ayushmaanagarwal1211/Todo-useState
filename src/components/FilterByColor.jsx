import React ,{ useContext} from 'react'
import FilterInput from './FilterInput'
import Context from './Context'
let colors = ["blue","green","orange","purple","red"]
export default function FilterByColor() {
    const {setChoices,choices} = useContext(Context)
      function handleChange(e){
          let name = e.target.name
          if(!colors.includes(name)){return }
          return  !choices.includes(name) ? 
          setChoices(prev=>[...prev,name]) :
          setChoices(choices.filter((data)=>data!==name))
      }
  return (
    <div className='flex-1 justify-center flex items-center flex-col gap-2'>
      <h1>Filter By Color</h1>
      {
        colors.map((data)=><FilterInput onChange={handleChange} color={data}/>)
      }
    </div>
  )
}
