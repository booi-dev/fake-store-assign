import React from "react";
import { TProduct } from "../../../type";

import ProductCard from "./productCard";

type HeaderProp = {
  products: TProduct[];
};

const Products: React.FC<HeaderProp> = (props) => {
  const { products } = props;
  // console.log(products);

  return (
    <div className="min-h-[50vh] bg-slate-100 p-4">
      <div className="app-container ">
        <h2 className="pt-4 text-center text-3xl font-bold text-main-black">
          Man & Woman Fashion
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
