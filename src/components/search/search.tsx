"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useProductStore } from "@/store/productStore";
import { TProduct } from "../../../type";

const searchIcon = "/assets/icons/searchIcon.svg";

type SearchProps = {
  productData: TProduct[];
};

const SearchBox: React.FC<SearchProps> = ({ productData }) => {
  const setProducts = useProductStore((state) => state.setProducts);

  const [searchNotFound, setSearchNotFound] = useState(false);

  const filter = (input: string) => {
    if (!input) {
      return;
    }

    setSearchNotFound(false);

    let newProducts: TProduct[] = [];

    productData.forEach((product: TProduct) => {
      const splitProductTitle = product.title.split(" ");
      splitProductTitle.forEach((splitTitle) => {
        if (splitTitle.toLowerCase().startsWith(input.toLowerCase())) {
          newProducts.push(product);
        }
      });
    });

    if (newProducts?.length < 1) {
      // console.log("item not found");
      setSearchNotFound(true);
      setProducts(productData);
      return;
    }

    console.log(newProducts);
    setProducts(newProducts);
  };

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    filter(val);
  };

  return (
    <div className="relative flex w-full max-w-[450px] items-center rounded bg-slate-50">
      <input
        className="w-full bg-transparent p-2 text-slate-950 focus:border-0 focus:outline-0"
        placeholder="Search this blog"
        onChange={handleInputOnChange}
      />
      <button className="h-full rounded-r bg-red-500 px-2 py-2 active:bg-red-600">
        <Image src={searchIcon} alt="search" width={20} height={20} />
      </button>
      {searchNotFound && (
        <div className="absolute bottom-[-2rem] right-0 truncate px-2 text-red-500">
          Searching item not found
        </div>
      )}
    </div>
  );
};

export default SearchBox;
