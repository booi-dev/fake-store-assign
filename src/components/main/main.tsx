import React from "react";
import axios from "axios";
import Header from "../header/header";
import Products from "../product/productList";
import { TProduct } from "../../../type";

const Main = async () => {
  const apiURL = "https://fakestoreapi.com/products";

  const products: TProduct[] = await axios.get(apiURL);

  console.log(products);

  return (
    <main className="min-h-[60vh] ">
      <Header />
      <Products products={products} />
    </main>
  );
};

export default Main;
