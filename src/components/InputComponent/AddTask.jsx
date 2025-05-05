import React, { useState, useRef } from "react";
import style from "./AddTask.module.css";

const AddTask = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState({
    text: "",
    body: "",
  });

  const textareaRef = useRef(null);

  // funk. na dynamicke prisposobovanie okna podla obsahu
  const autoSize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
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
    onAddTask((prevTasks) => [...prevTasks, newTask]);

    setTaskInput({ text: "", body: "" });
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  //funk, kt aktualizuje stav pri pisani inputu
  const handleChange = (event) => {
    // event.target označuje input, ktorý spustil udalosť (napr. ten, do ktorého užívateľ práve píše)
    const { name, value } = event.target;
    setTaskInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "body") autoSize();
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

      <textarea
        name="body"
        value={taskInput.body}
        placeholder="About..."
        onChange={handleChange}
        className={style.textareaAuto}
        rows="1"
        ref={textareaRef}
      />
      <button type="submit" className={style.addButton}>
        +
      </button>
    </form>
  );
};

export default AddTask;
