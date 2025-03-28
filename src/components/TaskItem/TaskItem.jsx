import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ onRenderTask }) => {
  return (
    <div className={styles.container}>
      {onRenderTask
        ? onRenderTask.map((task) => (
            <div key={task.id} className={styles.taskContainer}>
              <div>
                <p>{task.text}</p>
                <p>{task.body}</p>
              </div>
              {/* <button>X</button> */}
            </div>
          ))
        : null}
    </div>
  );
};

export default TaskItem;
