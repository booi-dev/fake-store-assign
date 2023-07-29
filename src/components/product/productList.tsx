import React from "react";
import { TProduct } from "../../../type";

type HeaderProp = {
  products: TProduct[];
};

const Products: React.FC<HeaderProp> = (props) => {
  const { products } = props;

  return <div className="mx-auto max-w-[55rem]"></div>;
};

export default Products;
