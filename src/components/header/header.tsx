import React from "react";
import BigMenuButton from "../ui/button/bigMenuButton";
import DropDownButton from "../ui/dropdown/dropdownButton";
import LanguageDropDown from "../ui/dropdown/languageDropDown";
import SearchBox from "../search/search";
import Profile from "./profile";

import HeroCarousel from "../hero/carousel";

import languageList from "./languageList";

const dropdownIcon = "/assets/icons/dropdownIcon.svg";

const Header: React.FC = (props) => {
  const droplist = [
    {
      id: "1",
      name: "No one",
    },
    {
      id: "2",
      name: "Care",
    },
    {
      id: "3",
      name: "What",
    },
    {
      id: "4",
      name: "You want",
    },
    {
      id: "5",
      name: "You want",
    },
    // {
    //   id: "6",
    //   itemName: "You want",
    // },
    // {
    //   id: "7",
    //   itemName: "You want",
    // },
  ];

  return (
    <div className=" bg-yellow-500 px-4">
      <div className="mx-auto max-w-[55rem]">
        <h1 className="mx-auto w-fit pt-4 text-3xl font-bold tracking-wider">
          Fake Store
        </h1>
        <div className="mt-6 flex items-center justify-around gap-4">
          <BigMenuButton />
          <DropDownButton
            text="category"
            icon={dropdownIcon}
            droplist={droplist}
          />
          <SearchBox />
          <LanguageDropDown
            defaultLanguage={languageList[0]}
            droplist={languageList}
          />
          <Profile />
        </div>
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Header;
