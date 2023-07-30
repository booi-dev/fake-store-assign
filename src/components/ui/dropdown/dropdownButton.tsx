"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import Backdrop from "../backdrop/backdrop";
import { useProductStore } from "@/store/productStore";
import { getCategoriedProducts } from "@/components/utils/apiCalls";

import { cn } from "../../../../lib/utils";
import { TProduct } from "../../../../type";

type TCategory = {
  id: number;
  category: string;
};

type DropDownButtonProps = {
  text: string;
  icon: string;
  light?: boolean;
  iconRevert?: boolean;
  productData: TProduct[];
  droplist: TCategory[];
  handleCategoriedProducts?: (p: string) => Promise<void>;
};

const DropDownButton: React.FC<DropDownButtonProps> = (props) => {
  const { text, icon, droplist, light, iconRevert, productData } = props;

  const setFilter = useProductStore((state) => state.setFilter);
  const setProducts = useProductStore((state) => state.setProducts);

  const [selectedCategory, setSelectedCategory] = useState<TCategory>({
    id: 0,
    category: text,
  });
  const [isDrop, setIsDrop] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  const handleFilteringByCategory = (categoryToFind: string) => {
    const filteredProducts = productData.filter(
      (prod) => prod.category === categoryToFind,
    );
    return filteredProducts;
  };

  const handleSetProducts = async (category: string) => {
    const data = handleFilteringByCategory(category);
    setProducts(data);
  };

  const handleSelection = (category: TCategory) => {
    goToTop();
    setSelectedCategory(category);
    setFilter(category.category);
    handleSetProducts(category.category);
    setIsDrop(false);
  };

  const handleDropDownBtn = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative flex min-w-[10rem] max-w-[10rem] flex-1 flex-shrink-0 items-center gap-1 rounded bg-main-color p-2",
        light && " bg-slate-100 text-black",
        iconRevert && "flex-row-reverse",
      )}
    >
      <button
        onClick={handleDropDownBtn}
        className="flex w-full shrink-0 items-center justify-between gap-2 capitalize"
      >
        <div className="shrink-0 text-sm"> {selectedCategory.category} </div>
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
