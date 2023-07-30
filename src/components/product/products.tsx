"use client";

import React, { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";

import { TProduct } from "../../../type";
import ProductCard from "./productCard";

type ProductsProps = {
  productData: TProduct[];
};

const Products: React.FC<ProductsProps> = ({ productData }) => {
  const products = useProductStore((state) => state.products);
  const filteredProduct = useProductStore((state) => state.filteredProduct);
  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  // console.log(filteredProduct);

  return (
    <div className="min-h-[50vh] bg-slate-100 p-4">
      <div className="app-container ">
        <h2 className="pt-4 text-center text-3xl font-bold capitalize text-main-black">
          {filteredProduct.length > 0 ? filteredProduct : "Man & Woman Fashion"}
        </h2>
        <div className="mt-4 flex flex-wrap justify-evenly gap-4">
          {products?.map((prod) => (
            <div key={prod.id} className="w-full md:w-[48%] lg:w-[32%]">
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
