import React, { useState } from "react";
import NoTasks from "../NoTasks/NoTasks";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import EditButtons from "../EditButtons/EditButtons";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, updateTasks }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // potvrdenie vymazania tasku, odstrani ho zo zoznamu
  const confirmDelete = () => {
    const result = tasks.filter((item) => item.id !== taskToDelete);
    updateTasks(result);
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  // nastavi ID tasku, ktory sa ma zmazat a zobrazi potvrdovacie okno
  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setShowConfirm(true);
  };

  // zrusi mazanie a skryje potvrdovacie okno
  const cancelDelete = () => {
    setTaskToDelete(null);
    setShowConfirm(false);
  };

  return (
    <div className={styles.container}>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <div key={task.id} className={styles.taskContainer}>
              <div className={styles.taskText}>
                <p>{task.text}</p>
                <p>{task.body}</p>
              </div>
              <button onClick={() => handleDeleteClick(task.id)}>x</button>
            </div>
          ))}
          {showConfirm && (
            <DeleteConfirm onConfirm={confirmDelete} onCancel={cancelDelete} />
          )}
        </>
      ) : (
        <NoTasks />
      )}
    </div>
  );
};

export default TaskList;
