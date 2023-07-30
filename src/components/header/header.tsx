import React from "react";
import BigMenuButton from "../ui/button/bigMenuButton";
import DropDownButton from "../ui/dropdown/dropdownButton";
import LanguageDropDown from "../ui/dropdown/languageDropDown";
import SearchBox from "../search/search";
import Profile from "./profile";
import HeroCarousel from "../hero/carousel";

import languageList from "./languageList";
import { getCategories } from "../utils/apiCalls";

const dropdownIcon = "/assets/icons/dropdownIcon.svg";

function generateCategoryArray(categories: string[]) {
  return categories.map((category, index) => ({
    id: index + 1,
    category: category,
  }));
}

type HeaderProps = {
  products?: [];
};

const Header = async (props: HeaderProps) => {
  const categories = await getCategories();
  const categoryArray = generateCategoryArray(categories);

  return (
    <div className=" bg-yellow-500 px-4">
      <div className="app-container">
        <h1 className="mx-auto w-fit pt-4 text-3xl font-bold tracking-wider">
          E-Store
        </h1>
        <div className="mt-6 flex flex-col-reverse items-center justify-between gap-2 sm:flex-row md:gap-4">
          <div className=" flex flex-1 justify-between gap-2 md:gap-4">
            <BigMenuButton />
            <DropDownButton
              text="category"
              icon={dropdownIcon}
              droplist={categoryArray}
            />
            <SearchBox />
          </div>
          <div className="ml-auto flex gap-2 md:gap-4">
            <LanguageDropDown
              defaultLanguage={languageList[0]}
              droplist={languageList}
            />
            <Profile />
          </div>
        </div>
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Header;
