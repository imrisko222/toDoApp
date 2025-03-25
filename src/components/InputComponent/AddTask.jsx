import React, { useState } from "react";
import style from "./AddTask.module.css";

const InputComponent = () => {
  const [taskText, setTaskText] = useState(""); //aktualne napis task
  const [tasks, setTasks] = useState([]); // vsetky ulozene tasky

  const submitHandler = (event) => {
    event.preventDefault();

    if (!taskText.trim()) return; // ignoruj prazdny task

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
    };

    setTasks((prevTasks) => {
      const updated = [...prevTasks, newTask];
      return updated;
    });

    setTaskText("");
    console.log(formData);
  };

  //funk, kt aktualizuje stav pri pisani inputu
  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <input
        type="text"
        name="task"
        value={formData.task}
        placeholder="Title..."
        onChange={handleChange}
      />
      <input
        type="text"
        name="taskBody"
        value={formData.taskBody}
        placeholder="About..."
        onChange={handleChange}
      />
      <button type="submit" className={style.addButton}>
        +
      </button>
    </form>
  );
};

export default InputComponent;
