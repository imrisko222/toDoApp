import React, { useState } from "react";
import AddTask from "../InputComponent/AddTask";

const ToDoContainer = () => {
  const [taskData, setTaskData] = useState();

  return <AddTask data={taskData} />;
};

export default ToDoContainer;
