import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

export default function List({ id, task, setUpdateUI, updateMode }) {
  return (
    <li className="flex p-3 ">
      {/* {task} */}
      <div className="icon_holder flex w-[100%]">
        <p className="p-4 w-[90%]">{task}</p>
        <BiEditAlt className="h-[100%] w-[8%] icon fa-home cursor-pointer" />
        <BsTrash className="h-[100%] w-[8%]  icon fa-home cursor-pointer " />
      </div>
    </li>
  );
}
