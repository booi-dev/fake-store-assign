import React from "react";
import Header from "../header/header";
import Products from "../product/products";

import { getProducts, getCategoriedProducts } from "../utils/apiCalls";
import { TProduct } from "../../../type";

const Main = async () => {
  const productData: TProduct[] = await getProducts();

  return (
    <main className="min-h-[60vh] ">
      <Header productData={productData} />
      <Products productData={productData} />
    </main>
  );
};

export default Main;
