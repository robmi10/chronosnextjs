import { StripeContext } from "@/stripecontext/context";
import Image from "next/image";
import React, { useContext } from "react";

const Products = () => {
  const { prices } = useContext(StripeContext);

  console.log({ prices });
  return (
    <div className="mt-4">
      {prices?.map((option) => {
        return (
          <div className=" w-96 h-full bg-red-400">
            {option.product.name}
            <div className="w-full h-full object-cover">
              <Image
                width={120}
                height={120}
                alt="biowtr"
                src="/images/biowtr.jpg"
              />
            </div>
            {option.product.price}
            {option.product.description}
            <h1 className=" text-xl">Price</h1>
            {option.unit_amount}
            {option.currency}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
