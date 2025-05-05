import React, { useState } from "react";
import NoTasks from "../NoTasks/NoTasks";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import EditButtons from "../EditButtons/EditButtons";
import EditTaskComponent from "../EditTaskComponent/EditTaskComponent";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, updateTasks }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  // const [showButtons, setShowButtons] = useState(true);
  const [selectedTaskId, setSelectedTaskId] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  // potvrdenie vymazania tasku, odstrani ho zo zoznamu
  const confirmDelete = () => {
    const result = tasks.filter((item) => item.id !== taskToDelete);
    updateTasks(result);
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  // nastavi ID tasku, ktory sa ma zmazat a zobrazi potvrdovacie okno
  const handleDeleteClick = (id, event) => {
    event.stopPropagation();
    setTaskToDelete(id);
    setShowConfirm(true);
  };

  // zrusi mazanie a skryje potvrdovacie okno
  const cancelDelete = () => {
    setTaskToDelete(null);
    setShowConfirm(false);
  };

  // Prepína zobrazenie EditButtons pre daný task.
  // Ak už je task vybraný, odstráni ho zo zoznamu, inak ho pridá.
  const handleTaskClick = (taskId) => {
    setSelectedTaskId((prevId) => {
      // ak uz je v zozname, tak ho odstrani
      if (prevId.includes(taskId)) {
        return prevId.filter((id) => id !== taskId);
      } else {
        // inak ho prida
        return [...prevId, taskId];
      }
    });
  };

  const handleEdit = (event, id) => {
    event.stopPropagation();
    console.log("kliknute");
  };

  return (
    <div className={styles.container}>
      {tasks.length > 0 ? (
        <>
          {tasks.map((task) => (
            <div key={task.id} onClick={() => handleTaskClick(task.id)}>
              <div className={styles.taskContainer}>
                <div className={styles.taskText}>
                  <p>{task.text}</p>
                  <p>{task.body}</p>
                </div>
                <button onClick={(event) => handleDeleteClick(task.id, event)}>
                  x
                </button>
              </div>
              {selectedTaskId.includes(task.id) && (
                <EditButtons onEdit={handleEdit} />
              )}
            </div>
          ))}
          {showConfirm && (
            <DeleteConfirm onConfirm={confirmDelete} onCancel={cancelDelete} />
          )}
          {/* {showEdit && <EditTaskComponent />} */}
        </>
      ) : (
        <NoTasks />
      )}
    </div>
  );
};

export default TaskList;
