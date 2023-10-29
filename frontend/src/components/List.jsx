import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export default function List({ id, task, setUpdateUI, updateMode }) {
  return (
    <li>
      {task}
      <div className="icon_holder">
        <BiEditAlt />
        <BsTrash />
      </div>
    </li>
  );
}
