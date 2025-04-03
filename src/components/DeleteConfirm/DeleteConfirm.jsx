import React from "react";
import styles from "./DeleteConfirm.module.css";

const DeleteConfirm = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}></div>
      <p>Naozaj si praješ zmazat túto úlohu?</p>
      <button onClick={onConfirm}>Potvrdiť</button>
      <button onClick={onCancel}>Zrušiť</button>
    </div>
  );
};

export default DeleteConfirm;
