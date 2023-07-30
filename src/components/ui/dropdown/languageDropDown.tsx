"use client";

import React, { useState } from "react";
import Image from "next/image";
import Backdrop from "../backdrop/backdrop";
import { cn } from "../../../../lib/utils";

const arrowDownIcon = "/assets/icons/arrow-down-icon.svg";

type TLanguage = {
  id: string;
  name: string;
  flagIcon: string;
};

type LanguageDropDownProps = {
  defaultLanguage: TLanguage;
  droplist: TLanguage[];
};

const LanguageDropDown: React.FC<LanguageDropDownProps> = (props) => {
  const { defaultLanguage, droplist } = props;

  const [isDrop, setIsDrop] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const handleSelectLanguage = (lan: TLanguage) => {
    setSelectedLanguage(lan);
    setIsDrop(false);
  };

  const handleDropDownBtn = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <div className=" relative hidden min-w-[120px] flex-shrink-0 cursor-pointer rounded bg-slate-100 p-2 text-black md:block">
      <div
        className="flex items-center justify-between gap-2"
        onClick={handleDropDownBtn}
      >
        <Image
          className={cn("transition-all")}
          src={selectedLanguage.flagIcon}
          width={20}
          height={10}
          alt={selectedLanguage.name}
        />
        <div className="text-sm"> {selectedLanguage.name} </div>
        <Image
          className={cn("transition-all", isDrop && "rotate-[-180deg]")}
          src={arrowDownIcon}
          width={20}
          height={10}
          alt="arrow down"
        />
      </div>

      {isDrop && (
        <>
          <div className="absolute left-0 right-[-30%] top-10 z-20 max-h-[500px] overflow-auto overflow-x-hidden rounded bg-slate-100 py-2">
            <ul className="flex flex-col ">
              {droplist.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-200"
                  onClick={() => handleSelectLanguage(item)}
                >
                  <Image
                    src={item.flagIcon}
                    alt={item.id}
                    width={20}
                    height={10}
                  />
                  <h2> {item.name} </h2>
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

export default LanguageDropDown;
