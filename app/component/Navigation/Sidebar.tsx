import React from "react";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { LuBellRing } from "react-icons/lu";
import { RiArchiveLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div>
      <ul className="mx-2 my-2 space-y-4">
        <li className="flex space-x-2">
          <RiLightbulbFlashFill className="h-6 w-6 " />
          <h3 className="text-l">Notes</h3>
        </li>
        <li className="flex space-x-2">
          <LuBellRing className="h-6 w-6 " />
          <h3 className="text-l">Reminder</h3>
        </li>
        <li className="flex space-x-2">
          <RiArchiveLine className="h-6 w-6 " />
          <h3 className="text-l">Archive</h3>
        </li>
        <li className="flex space-x-2">
          <RiEdit2Line className="h-6 w-6 " />
          <h3 className="text-l"> Edit Labels</h3>
        </li>
        <li className="flex space-x-2">
          <RiDeleteBinLine className="h-6 w-6 " />
          <h3 className="text-l">Trash</h3>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;