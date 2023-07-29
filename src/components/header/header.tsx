import React from "react";
import BigMenuButton from "../ui/button/bigMenuButton";
import DropDownButton from "../ui/dropdown/dropdownButton";
import LanguageDropDown from "../ui/dropdown/languageDropDown";
import SearchBox from "../search/search";

const dropdownIcon = "/assets/icons/dropdownIcon.svg";

const Header = () => {
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

  const languageList = [
    {
      id: "english",
      name: "English",
      flagIcon: "/assets/icons/uk-flag-icon.svg",
    },
    {
      id: "india",
      name: "India",
      flagIcon: "/assets/icons/india-flag-icon.svg",
    },
    {
      id: "japan",
      name: "Japan",
      flagIcon: "/assets/icons/japan-flag-icon.svg",
    },
  ];

  return (
    <div className="mx-auto max-w-[55rem] p-4">
      <h1 className="mx-auto w-fit text-3xl font-bold tracking-wider">
        Fake Store
      </h1>
      <div className="mt-10 flex items-center justify-around gap-4">
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
      </div>
    </div>
  );
};

export default Header;
