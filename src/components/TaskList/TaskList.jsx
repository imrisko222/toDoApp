import React from "react";
import NoTasks from "../NoTasks/NoTasks";
import EditButtons from "../EditButtons/EditButtons";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, updateTasks }) => {
  //funk na mazanie itemTask
  const deleteItem = (id) => {
    const result = tasks.filter((item) => item.id !== id);
    updateTasks(result);
  };

  return (
    <div className={styles.container}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task.id} className={styles.taskContainer}>
            <div className={styles.taskText}>
              <p>{task.text}</p>
              <p>{task.body}</p>
            </div>
            <button onClick={() => deleteItem(task.id)}>x</button>
          </div>
        ))
      ) : (
        <NoTasks />
      )}
    </div>
  );
};

export default TaskList;
