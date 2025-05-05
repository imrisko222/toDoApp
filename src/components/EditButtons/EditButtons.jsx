import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
// import { IoIosInformation } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import styles from "./EditButtons.module.css";

const EditButtons = ({ onEdit }) => {
  return (
    <div className={styles.container}>
      <button onClick={onEdit}>
        <IoShareSocialSharp />
      </button>
      <button onClick={onEdit}>
        {/* <IoIosInformation /> */}
        <IoMdInformationCircleOutline />
      </button>
      <button onClick={onEdit}>
        <MdEdit />
      </button>
    </div>
  );
};

export default EditButtons;
