import { StripeContext } from "@/stripecontext/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Products = () => {
  const { prices, cart, setCart } = useContext(StripeContext);
  const [cartstatus, setCartstatus] = useState(false);

  const remove = (item) => {
    let cartFilter = [];
    if (cart.length > 0) {
      cartFilter = cart.filter((product) => {
        if (product.id === item.id) {
          console.log({ product });
          product.quantity = product.quantity - 1;
          return { ...product };
        }
      });

      console.log({ currentCart: cart });
    } else {
      cart.push({ id: item.id, quantity: 1, info: item });
    }

    setCart(cart);
    setCartstatus(!cartstatus);
  };

  const add = (item) => {
    console.log({ item });
    let cartFilter = [];
    if (cart.length > 0) {
      cartFilter = cart.filter((product) => {
        if (product.id === item.id) {
          console.log({ product });
          product.quantity = product.quantity + 1;
          return { ...product };
        }
      });

      console.log({ currentCart: cart });
    } else {
      cart.push({ id: item.id, quantity: 1, info: item });
    }

    setCart(cart);
    setCartstatus(!cartstatus);
  };

  return (
    <div className="mt-4 flex justify-center">
      {prices?.map((option, index) => {
        return (
          <div key={index} className="w-5/12 h-full p-8 ">
            {option.product.name}
            <div className="w-full h-full text-sm ">
              <img alt="biowtr" src="/images/biowtr.jpg" />
              <div className=" text-xl">{option.product.description} </div>
              <h1 className=" text-lg">Price</h1>
              <h1 className=" text-sm">
                {" "}
                {option?.unit_amount_decimal.slice(0, -2)} {option.currency}
              </h1>
              <div className=" w-full flex justify-center">
                <div className="flex flex-row justify-between mt-4 w-2/4">
                  <button
                    onClick={() => {
                      remove(option);
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <div>
                    {cart?.[index]?.quantity > 0 ? cart?.[index]?.quantity : 0}
                  </div>
                  <button
                    onClick={() => {
                      add(option);
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
