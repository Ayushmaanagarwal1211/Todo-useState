import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Context from './Context'

function FilterInput({color,onChange,isChecked}) {
  return (
    <div key={color} className="flex w-[200px] m-auto gap-2 items-center justify-between">
        <input checked={isChecked} onChange={onChange} name={color} type="checkbox" id={color}></input>
        <div className={`bg-${color.toLowerCase()}-700 h-[15px] w-[50px] rounded-md `}></div>
        <label htmlFor={color} className='w-[40px]'>{color}</label>
      </div>
  )
}
export default FilterInput