"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";

type DropDownButtonProps = {
  text: string;
  icon: string;
  droplist: {
    id: string;
    itemName: string;
  }[];
};

const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  const { text, icon, droplist } = props;

  const [isDrop, setIsDrop] = useState(false);

  const handleDropDownBtn = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <div className="relative flex items-center gap-2 rounded bg-main-color p-2">
      <div className="text-sm"> {text} </div>
      <button onClick={handleDropDownBtn}>
        <Image src={icon} width={20} height={10} alt={text} />
      </button>
      {isDrop && (
        <div className="absolute left-0 right-[-70%] top-10 max-h-[500px] overflow-scroll overflow-x-hidden rounded bg-main-color py-2">
          <ul className="flex flex-col gap-2 ">
            {droplist.map((item) => (
              <li
                key={item.id}
                className="border-b-2 border-b-gray-800 px-4 py-2 active:bg-slate-800"
              >
                {item.itemName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
