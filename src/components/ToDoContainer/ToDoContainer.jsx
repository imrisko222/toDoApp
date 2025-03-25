import React, { useState } from "react";
import InputComponent from "../InputComponent/AddTask";

const ToDoContainer = () => {
  const [tastData, setTaskData] = useState();

  return <InputComponent data={tastData} />;
};

export default ToDoContainer;
