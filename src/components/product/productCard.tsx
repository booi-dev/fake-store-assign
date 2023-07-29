import React from "react";
import { TProduct } from "../../../type";
import Image from "next/image";

type ProductCardProps = {
  prod: TProduct;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { prod } = props;
  return (
    <div
      key={prod.id}
      className="flex h-full w-full flex-col justify-between rounded-md bg-white px-4 py-6 text-center text-main-black shadow-sm"
    >
      <h2 className="font-bold leading-5"> {prod.title}</h2>

      <h2>
        <span className="text-red-600">Price</span> $ {prod.price}
      </h2>
      <div className="relative mx-auto mt-4 h-[200px] w-[150px]">
        <Image
          src={prod.image}
          fill={true}
          alt={prod.title}
          //   placeholder="blur"
          sizes="(max-width: 150px) 100vw, (max-width: 150px) 55vw, 33vw"
        />
      </div>
    </div>
  );
};

export default ProductCard;
