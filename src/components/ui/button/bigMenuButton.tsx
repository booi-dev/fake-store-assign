import React from "react";

const BigMenuButton = () => {
  return (
    <button className="hidden flex-col justify-center gap-2 active:scale-95 md:flex">
      <div className="h-1 w-8 bg-slate-50" />
      <div className="h-1 w-8 bg-slate-50" />
      <div className="h-1 w-8 bg-slate-50" />
    </button>
  );
};

export default BigMenuButton;
