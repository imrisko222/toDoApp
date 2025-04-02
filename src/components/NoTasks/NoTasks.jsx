import React from "react";
import styles from "./NoTasks.module.css";

const NoTasks = () => {
  return (
    <div className={styles.container}>
      <div></div> {/* vrchna ciara */}
      <p>No tasks</p>
      <div></div> {/* spodna ciara */}
    </div>
  );
};

export default NoTasks;
