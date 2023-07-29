import React from "react";
import BigMenuButton from "../ui/button/bigMenuButton";
import DropDownButton from "../ui/dropdown/dropdownButton";

const dropdownIcon = "/assets/icons/dropdownIcon.png";

const Header = () => {
  const droplist = [
    {
      id: "1",
      itemName: "No one",
    },
    {
      id: "2",
      itemName: "Care",
    },
    {
      id: "3",
      itemName: "What",
    },
    {
      id: "4",
      itemName: "You want",
    },
    {
      id: "5",
      itemName: "You want",
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
    <div className="mx-auto max-w-[55rem] bg-red-500 p-4">
      <h1 className="mx-auto w-fit text-3xl">Fake Store</h1>
      <div className="flex items-center gap-4">
        <BigMenuButton />
        <DropDownButton
          text="category"
          icon={dropdownIcon}
          droplist={droplist}
        />
      </div>
    </div>
  );
};

export default Header;
