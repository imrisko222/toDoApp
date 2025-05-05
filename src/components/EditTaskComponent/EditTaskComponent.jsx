import { Formik, useFormik } from "formik";
import React from "react";

const EditTaskComponent = () => {
  const formik = useFormik({
    initialValues: {
      title: "skuskaJeden",
      taskText: "skuskaDva",
    },
    onSubmit: (values) => {
      console.log(values.title);
    },
  });

  // TODO: po odoslani formulara sa bude musiet nastavit na false showEdit state z TASKLIST.JSX

  return (
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="title" />
      <input type="text" name="taskText" />
      <button type="submit">Upravit</button>
    </form>
  );
};

export default EditTaskComponent;
