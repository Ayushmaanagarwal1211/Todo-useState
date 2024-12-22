import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Context from './Context'

function RemainingTodos() {
  const {tasks} = useContext(Context)
  return (
    <div className='flex-1 flex justify-center items-center flex-col gap-2'>
      <h1>Remaining Todos</h1>
      <span>{tasks && tasks.reduce((acc,data)=>acc + (data.status=="active"?1:0),0)}</span>
    </div>
  )
}
export default React.memo(RemainingTodos)