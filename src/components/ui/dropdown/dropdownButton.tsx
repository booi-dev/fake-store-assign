"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import Backdrop from "../backdrop/backdrop";

import { cn } from "../../../../lib/utils";

type TCategoryList = {
  id: string;
  name: string;
  icon?: string;
};

type DropDownButtonProps = {
  text: string;
  icon: string;
  light?: boolean;
  iconRevert?: boolean;
  droplist: TCategoryList[];
};

const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  const { text, icon, droplist, light, iconRevert } = props;

  const [isDrop, setIsDrop] = useState(false);

  const handleDropDownBtn = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative flex items-center gap-2 rounded bg-main-color p-2",
        light && "bg-slate-100 text-black",
        iconRevert && "flex-row-reverse",
      )}
    >
      <div className="text-sm"> {text} </div>
      <button onClick={handleDropDownBtn}>
        <Image
          className={cn("transition-all", isDrop && "rotate-[-180deg]")}
          src={icon}
          width={20}
          height={10}
          alt={text}
        />
      </button>
      {isDrop && (
        <>
          <div
            className={cn(
              "absolute left-0 right-[-70%] top-10 z-20 max-h-[500px] overflow-scroll overflow-x-hidden rounded bg-main-color py-2",
              light && "bg-slate-100",
            )}
          >
            <ul className="flex flex-col gap-2 ">
              {droplist.map((item) => (
                <li
                  key={item.id}
                  className="border-b-2 border-b-gray-800 px-4 py-2 active:bg-slate-800"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <Backdrop closeHandler={() => setIsDrop(false)} />
        </>
      )}
    </div>
  );
};

export default DropDownButton;
