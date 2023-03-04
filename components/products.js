import { StripeContext } from "@/stripecontext/context";
import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useToast } from "@chakra-ui/toast";

const Products = () => {
  const toast = useToast();
  const { prices, cart, setCart, cartstatus, setCartstatus } =
    useContext(StripeContext);

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
    toast({
      position: "top-left",
      title: "Produkt är borttagen.",
      status: "success",
      duration: 500,
      isClosable: true,
    });
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
    // setOpen(!open);
    setCart(cart);
    setCartstatus(!cartstatus);
    toast({
      position: "top-left",

      title: "Produkt är tillagd.",
      status: "success",
      duration: 500,
      isClosable: true,
    });
  };

  return (
    <div className="mt-20 flex h-screen  justify-center w-full flex-col items-center p-16">
      <span className="text-4xl mt-10 md:text-5xl font-semibold  tracking-tight">
        HANDLA
      </span>
      {prices?.map((option, index) => {
        return (
          <div key={index} className="w-5/12 h-full p-8  ">
            {/* <h1 className="text-2xl font-bold">{option.product.name}</h1> */}
            <div className="w-full h-full text-sm ">
              <img
                className=" rounded-full"
                alt="biowtr"
                src="/images/biowtr.jpg"
              />
              <div className=" w-full  justify-center items-center flex">
                <div className=" flex mt-5 flex-col justify-center w-3/5 ">
                  <div className=" text-2xl">{option.product.description} </div>
                  <h1 className=" text-lg">PRIS</h1>
                  <h1 className=" text-sm">
                    {" "}
                    {option?.unit_amount_decimal.slice(0, -2)} SEK
                  </h1>
                </div>
              </div>
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
