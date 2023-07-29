"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import Backdrop from "../backdrop/backdrop";
import { useProductStore } from "@/store/productStore";
import { getCategoriedProducts } from "@/components/utils/apiCalls";

import { cn } from "../../../../lib/utils";

type TCategory = {
  id: number;
  category: string;
};

type DropDownButtonProps = {
  text: string;
  icon: string;
  light?: boolean;
  iconRevert?: boolean;
  droplist: TCategory[];
  handleCategoriedProducts?: (p: string) => Promise<void>;
};

const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  const { text, icon, droplist, light, iconRevert } = props;

  const setProducts = useProductStore((state) => state.setProducts);

  const [selectedCategory, setSelectedCategory] = useState<TCategory>({
    id: 0,
    category: text,
  });
  const [isDrop, setIsDrop] = useState(false);

  const handleSetProducts = async (category: string) => {
    const data = await getCategoriedProducts(category);
    setProducts(data);
  };

  const handleSelection = (category: TCategory) => {
    setSelectedCategory(category);
    handleSetProducts(category.category);
    setIsDrop(false);
  };

  const handleDropDownBtn = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative min-w-[110px] flex-shrink-0 gap-1 rounded bg-main-color p-2",
        light && " bg-slate-100 text-black",
        iconRevert && "flex-row-reverse",
      )}
    >
      <button
        onClick={handleDropDownBtn}
        className="flex w-full items-center justify-between gap-2 capitalize"
      >
        <div className="text-sm"> {selectedCategory.category} </div>
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
              "absolute left-0 right-[-70%] top-10 z-20 max-h-[400px] overflow-auto overflow-x-hidden rounded bg-main-color py-2",
              light && "bg-slate-100",
            )}
          >
            <ul className="flex flex-col ">
              {droplist.map((item) => (
                <li
                  key={item.id}
                  className="border-b-2 border-b-gray-800 px-4 py-2  hover:bg-slate-800"
                >
                  <button
                    onClick={() => handleSelection(item)}
                    className="w-full text-left capitalize"
                  >
                    {item.category}
                  </button>
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
