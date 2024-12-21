import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Context from './Context'

export default function RemainingTodos() {
  let {count} = useContext(Context)
  return (
    <div className='flex-1 flex justify-center items-center flex-col gap-2'>
      <h1>Remaining Todos</h1>
      <span>{count}</span>
    </div>
  )
}
