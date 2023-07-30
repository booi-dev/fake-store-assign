"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "../ui/button/MenuButton";
import { cn } from "../../../lib/utils";
import useWindowWidth from "../utils/useWindowSize";

import { TMenuOptions } from "../ui/button/MenuButton";

const Nav = () => {
  const [isSmallScreenNavOn, setIsSmallScreenNavOn] = useState(false);

  const winWidth = useWindowWidth();

  // console.log(winWidth);

  const toggleCloseNav = () => {
    setIsSmallScreenNavOn((prev) => !prev);
  };

  const btnOptions: TMenuOptions = {
    kind: "big",
    position: "right",
    hideOnBigScreen: true,
    clickHandler: toggleCloseNav,
  };

  useEffect(() => {
    if (winWidth > 768) {
      setIsSmallScreenNavOn(false);
    }
  }, [winWidth]);

  return (
    <nav
      className={cn(
        "flex h-12 justify-center bg-yellow-500",
        isSmallScreenNavOn && "sticky top-0 z-20",
      )}
    >
      <div className="hidden h-0 w-0 border-l-[20px] border-t-[48px] border-transparent border-t-main-color md:block" />
      <div className="flex w-full items-center justify-evenly bg-main-color px-4 md:w-[55rem]">
        <MenuButton options={btnOptions} isClose={isSmallScreenNavOn} />
        <div
          className={cn(
            "fixed inset-0 top-12 z-20 hidden items-center justify-center bg-yellow-500 md:static md:flex md:bg-transparent",
            isSmallScreenNavOn && "flex",
          )}
        >
          <ul className="flex translate-y-[-3rem] flex-col gap-2 text-start font-bold md:translate-y-0 md:flex-row md:gap-4 md:font-normal [&>li]:text-3xl md:[&>li]:text-base">
            <li>Best Sellers</li>
            <li>Gift Ideas</li>
            <li>New Release</li>
            <li>Today&apos;s Deals</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
      <div className="hidden h-0 w-0 border-r-[20px] border-t-[48px] border-transparent border-t-main-color md:block" />
    </nav>
  );
};

export default Nav;
