import React from "react";
import Header from "../header/header";
import Products from "../product/products";

// import { getProducts, getCategoriedProducts } from "../utils/apiCalls";
// import { TProduct } from "../../../type";

const Main = async () => {
  return (
    <main className="min-h-[60vh] ">
      <Header />
      <Products />
    </main>
  );
};

export default Main;
