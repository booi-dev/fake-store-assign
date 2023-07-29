import React from "react";

const Nav = () => {
  return (
    <nav className="flex h-12 justify-center bg-yellow-400  ">
      <div className="border-t-main-color hidden h-0 w-0 border-l-[20px] border-t-[48px] border-transparent lg:block" />
      <div className="flex items-center justify-evenly bg-main-color px-4 lg:w-[55rem]">
        <ul className="flex items-center gap-4 text-sm">
          <li>Best Sellers</li>
          <li>Gift Ideas</li>
          <li>New Release</li>
          <li>Today&apos;s Deals</li>
          <li>Customer Service</li>
        </ul>
      </div>
      <div className="border-t-main-color hidden h-0 w-0 border-r-[20px] border-t-[48px] border-transparent lg:block" />
    </nav>
  );
};

export default Nav;
