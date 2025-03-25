import React, { useState } from "react";
import style from "./AddTask.module.css";

const AddTask = () => {
  const [taskText, setTaskText] = useState(""); //aktualne napis task
  const [tasks, setTasks] = useState([]); // vsetky ulozene tasky

  const submitHandler = (event) => {
    event.preventDefault(); //zabran prednastavene spravanie

    if (!taskText.trim()) return; // ignoruj prazdny task

    // Vytvorenie novej úlohy s unikátnym ID a čistým textom
    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
    };

    // Pridanie novej úlohy do zoznamu existujúcich taskov
    setTasks((prevTasks) => {
      const updated = [...prevTasks, newTask];
      return updated;
    });

    setTaskText("");
    console.log(tasks);
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
        value={taskText}
        placeholder="Title..."
        onChange={handleChange}
      />
      <input
        type="text"
        name="taskBody"
        // value={formData.taskBody} TOTO BUDE TREBA DOROBIT TENTO RIADOK
        placeholder="About..."
        onChange={handleChange}
      />
      <button type="submit" className={style.addButton}>
        +
      </button>
    </form>
  );
};

export default AddTask;
