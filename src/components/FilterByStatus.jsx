import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
let filter_array = ["all","completed","active"]
export default function FilterByStatus() {
  const {filter,setFilter} = useContext(Context)
  function handleChange(e){
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
