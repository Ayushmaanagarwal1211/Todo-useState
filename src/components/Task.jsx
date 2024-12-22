import React, { useContext, useState } from "react";
import { FaCheck,  FaPenToSquare, FaX } from "react-icons/fa6";
import Context from "./Context";


export default function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(task.task);
  const { tasks,update_task_array } = useContext(Context);
 
  function handleClick() {
    const arr = tasks.map((data)=>data.id == task.id ? {...data,status: task.status == "active" ? "completed" : "active"} : data)
    update_task_array(arr);
  }
  function handleEdit() {
    const arr = tasks.map((data)=>data.id == task.id ? {...data,task:input} : data)
    update_task_array(arr);
    setIsEdit(false);
  }
  function handleDeconste() {
    const arr = tasks.filter((data) => data.id !== task.id);
    update_task_array(arr);
  }

  return (
    <div
      key={task.id}
      className="flex gap-3 border-[1px] items-center justify-around border-gray-200 p-3 "
    >
      <div className="flex-1 flex gap-2 justify-center items-center ">
        <label
          onClick={handleClick}
          className="rounded-full border-[1px] border-gray-400 block w-[30px] flex justify-center items-center p-1 h-[30px]"
          htmlFor={task.id}
        >
          {task.status == "active" ? (
            <></>
          ) : (
            <FaCheck size={"40px"} color="green" />
          )}
        </label>
        <input id={task.id} hidden type="checkbox"></input>
        <p>{task.color}</p>
      </div>
      {
        !isEdit ? <><h1 className="flex-1 flex">{task.task}</h1>
        <div className="flex w-[100px] gap-20 flex-1"><FaPenToSquare onClick={() => setIsEdit(true)} /><FaX onClick={handleDeconste} />
        </div></> : <>
        <input
          className="flex-1"
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          value={input}
          placeholder="Enter Title ..."
        ></input>
              <div className="flex w-[100px] gap-20 flex-1">
              <button onClick={handleEdit}>Submit</button>
              <FaX onClick={handleDeconste} />
</div>
        </>
      }
     
    </div>
  );
}
