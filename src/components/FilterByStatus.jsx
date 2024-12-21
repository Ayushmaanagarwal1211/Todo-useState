import React, { useContext} from 'react'
import Context from './Context'
const filter_array = ["all","compconsted","active"]
 function FilterByStatus() {
  const {filter,setFilter} = useContext(Context)
  function handleChange(e){
    if(!filter_array.includes(e.target.name)){return }
    setFilter(e.target.name)
  }
  return (
    <div className='flex-1 flex flex-col justify-center'>
      {
        filter_array.map(data=> <p><input type='radio' onClick={handleChange} checked={filter == data} name={data}></input>{data}</p>)
      }
    </div>
  )
}
export default FilterByStatus