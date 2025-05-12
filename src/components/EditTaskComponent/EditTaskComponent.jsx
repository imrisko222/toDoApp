import { Formik, useFormik } from "formik";
import React from "react";
import styles from "./EditTaskComponent.module.css";

const EditTaskComponent = ({ task, updateTask, setShowEdit }) => {
  // Inicializácia Formiku s počiatočnými hodnotami
  const formik = useFormik({
    initialValues: {
      title: task.text,
      taskText: task.body,
    },
    onSubmit: (values) => {
      updateTask(task.id, values); // vola sa funk. poslana z rodica
      setShowEdit(false);
    },
  });

  const handleCancel = () => {
    formik.resetForm(); // resetne hodnoty vo formiku
    setShowEdit(false); // zatvori Edit formular
  };

  // TODO: po odoslani formulara sa bude musiet nastavit na false showEdit state z TASKLIST.JSX

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <textarea
        type="text"
        name="taskText"
        value={formik.values.taskText}
        onChange={formik.handleChange}
      />
      <div>
        <button type="submit">Upravit</button>
        <button type="button" onClick={handleCancel}>
          Zrušiť zmeny
        </button>
      </div>
    </form>
  );
};

export default EditTaskComponent;
