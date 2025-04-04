import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
// import { IoIosInformation } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import styles from "./EditButtons.module.css";

const EditButtons = () => {
  return (
    <div className={styles.container}>
      <button>
        <IoShareSocialSharp />
      </button>
      <button>
        {/* <IoIosInformation /> */}
        <IoMdInformationCircleOutline />
      </button>
      <button>
        <MdEdit />
      </button>
    </div>
  );
};

export default EditButtons;
