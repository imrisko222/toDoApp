import React, { useState, useEffect } from "react";
import style from "./AddTask.module.css";

const AddTask = () => {
  const [taskInput, setTaskInput] = useState({
    text: "",
    body: "",
  });
  const [tasks, setTasks] = useState([]); // vsetky ulozene tasky

  useEffect(() => {
    if (tasks) return console.log(tasks);
  }, [tasks]);

  const submitHandler = (event) => {
    event.preventDefault(); //zabran prednastavene spravanie

    // metoda .trim() odstranuje medzeri z oboch stran stringu
    if (!taskInput.text.trim()) return; // ignoruj prazdny task

    // Vytvorenie novej úlohy s unikátnym ID a čistým textom
    const newTask = {
      id: Date.now(),
      text: taskInput.text.trim(),
      body: taskInput.body.trim(),
    };

    // Pridanie novej úlohy do zoznamu existujúcich taskov
    setTasks((prevTasks) => {
      const updated = [...prevTasks, newTask];
      return updated;
    });

    setTaskInput({ text: "", body: "" });
    console.log("toto nie je log z useEffectu:", tasks);
  };

  //funk, kt aktualizuje stav pri pisani inputu
  const handleChange = (event) => {
    // event.target označuje input, ktorý spustil udalosť (napr. ten, do ktorého užívateľ práve píše)
    const { name, value } = event.target;
    setTaskInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <input
        type="text"
        name="text"
        value={taskInput.text}
        placeholder="Title..."
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        value={taskInput.body}
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
