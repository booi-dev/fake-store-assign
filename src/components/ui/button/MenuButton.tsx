import React from "react";
import { cn } from "../../../../lib/utils";

export type TMenuOptions = {
  kind?: "small" | "big";
  position: "left" | "middle" | "right";
  hideOnBigScreen?: boolean;
  hideOnSmallScreen?: boolean;
  clickHandler?: () => void;
};

export type MenuOptionsProps = {
  options: TMenuOptions;
  isClose?: boolean;
};

const classesForClose = "";

const MenuButton: React.FC<MenuOptionsProps> = (props) => {
  const { options, isClose } = props;
  return (
    <button
      className={cn(
        " relative flex min-h-[30px] min-w-[10px] flex-col justify-center gap-2 transition-all duration-300 active:scale-95",
        options?.hideOnBigScreen && "md:hidden",
        options?.hideOnSmallScreen && "hidden",
        options?.position === "left" && "mr-auto",
        options?.position === "right" && "ml-auto",
      )}
      onClick={options?.clickHandler}
    >
      <div
        className={cn(
          "h-1 w-8 bg-slate-50",
          isClose && "absolute rotate-[40deg]",
        )}
      />
      <div
        className={cn("h-1 w-8 bg-slate-50", isClose && "rotate-[-40deg]")}
      />
      <div className={cn("h-1 w-8 bg-slate-50", isClose && "hidden")} />
    </button>
  );
};

export default MenuButton;
