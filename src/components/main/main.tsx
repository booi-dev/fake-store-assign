import React from "react";
import axios from "axios";
import Header from "../header/header";
import Products from "../product/products";
import { TProduct } from "../../../type";

const Main = async () => {
  const apiURL = "https://fakestoreapi.com/products?limit=20";

  const res = await axios.get<TProduct[]>(apiURL);

  const products: TProduct[] = res.data;

  // console.log(products);

  return (
    <main className="min-h-[60vh] ">
      <Header />
      <Products products={products} />
    </main>
  );
};

export default Main;
