import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoIosInformation } from "react-icons/io";
import { MdEdit } from "react-icons/md";

const EditButtons = () => {
  return (
    <div>
      <button>
        <IoShareSocialSharp />
      </button>
      <button>
        <IoIosInformation />
      </button>
      <button>
        <MdEdit />
      </button>
    </div>
  );
};

export default EditButtons;
