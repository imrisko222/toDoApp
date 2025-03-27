import React, { useState, useEffect } from "react";
import AddTask from "../InputComponent/AddTask";
import TaskItem from "../TaskItem/TaskItem";

const ToDoContainer = () => {
  const [taskData, setTaskData] = useState([]);

  console.log(taskData);

  return (
    <>
      <AddTask onAddTask={setTaskData} />
      <TaskItem onRenderTask={taskData} />
    </>
  );
};

export default ToDoContainer;
