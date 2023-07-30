import React from "react";

const HeroCarousel = () => {
  return (
    <div className="relative flex min-h-[60vh] w-full flex-col items-center justify-center">
      <div className="hero-img bg-red absolute h-full w-full bg-cover bg-center bg-no-repeat opacity-80" />

      <h2 className="z-10 max-w-[45rem] select-none text-center text-4xl font-bold uppercase text-yellow-100 md:text-6xl">
        Get start your favorite shopping
      </h2>

      <button className=" absolute bottom-10 z-10 rounded-md bg-main-color px-8 py-2 font-bold text-yellow-100">
        BUY NOW
      </button>
    </div>
  );
};

export default HeroCarousel;
