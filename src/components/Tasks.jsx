import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import Context from "./Context";

export default function Tasks() {
  let { tasks, filter, choices } = useContext(Context);

  return (
    <div className="w-[100%] ">
      {tasks?.length > 0 &&
        tasks.map((data) => {
          if (
            (choices.includes(data.color) || choices.length == 0) &&
            (data.status == filter || filter == "all")
          ) {
            return <Task key={data.id} task={data} />;
          }
        })}
    </div>
  );
}
