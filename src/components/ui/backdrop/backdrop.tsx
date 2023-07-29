import React from "react";

type BackdropProp = {
  closeHandler: () => void;
};

const Backdrop: React.FC<BackdropProp> = (props) => {
  const { closeHandler } = props;

  return (
    <div
      className="fixed inset-0 z-10 h-full w-full bg-black bg-opacity-30"
      onClick={closeHandler}
    />
  );
};

export default Backdrop;
