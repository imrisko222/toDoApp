import React from "react";
import style from "./InputComponent.module.css";

const InputComponent = () => {
  const submitHandler = (event) => {
    event.preventDefaul();
  };

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="About..." />
      <button type="submit">+</button>
    </form>
  );
};

export default InputComponent;
