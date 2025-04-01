import React, { useState, useEffect } from "react";
import AddTask from "../InputComponent/AddTask";
import TaskList from "../TaskList/TaskList";

const ToDoContainer = () => {
  const [taskData, setTaskData] = useState([]);

  console.log("tu su data z ToDoContainer", taskData);

  return (
    <>
      <AddTask onAddTask={setTaskData} />
      <TaskList tasks={taskData} updateTasks={setTaskData} />
    </>
  );
};

export default ToDoContainer;
