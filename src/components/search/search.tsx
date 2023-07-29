import React from "react";
import Image from "next/image";

const searchIcon = "/assets/icons/searchIcon.svg";

const SearchBox = () => {
  return (
    <div className="flex items-center rounded bg-slate-50">
      <input
        className="w-full bg-transparent px-2 text-slate-950 focus:outline-transparent "
        placeholder="Search this blog"
      />
      <button className="h-full rounded-r bg-red-500 px-2 py-2 active:bg-red-600">
        <Image src={searchIcon} alt="search" width={20} height={20} />
      </button>
    </div>
  );
};

export default SearchBox;
