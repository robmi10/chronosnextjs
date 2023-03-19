import { StripeContext } from "@/stripecontext/context";
import Link from "next/link";

import React, { useContext, useEffect } from "react";
import { AiOutlineShopping, AiOutlineHome } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const { setOpen, cart, totalquantity, menu, setMenu, setTotalquantity } =
    useContext(StripeContext);
  const cartBadge = cart.length > 0;

  const totalQuantity = cart?.reduce((accumalator, items) => {
    return accumalator + items.quantity;
  }, 0);

  useEffect(() => {
    setTotalquantity(totalQuantity);
  }, [totalquantity]);

  return (
    <div className="w-full h-8 z-10 fixed bg-white border  border-gray-200 flex flex-row justify-between p-8 items-center">
      <a href="/" className=" cursor-pointer" to="/">
        {/* <img
          width={120}
          height={120}
          className="mt-5  "
          src="/images/chronos.svg"
        /> */}

        <p className=" font-bold text-xs">BIOWTR</p>
      </a>
      <div className="ml-20 flex flex-row gap-20 w-full">
        <Link className=" hidden md:flex" href="#shop" scroll={false}>
          HANDLA
        </Link>

        <Link className=" hidden md:flex" href="#faq" scroll={false}>
          FAQ
        </Link>

        <Link className=" hidden md:flex" href="#infonow" scroll={false}>
          OM-OSS
        </Link>
      </div>
      {/* 
      <Link
        className=" cursor-pointer"
        to="faq"
        offset={0}
        duration={1000}
        smooth={true}
      >
        FAQ
      </Link> */}

      <div className="flex gap-4">
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          {cartBadge && totalQuantity > 0 && (
            <div className=" animate-animate absolute top-1 ml-[-1px] w-5 h-5 bg-indigo-700 text-white rounded-full items-center flex justify-center text-xs  ">
              {totalQuantity}
            </div>
          )}
          <AiOutlineShopping />
        </button>
        {/* setMenu */}

        <button
          className=" flex md:hidden"
          onClick={() => {
            setMenu(true);
            console.log("setMenu", menu);
          }}
        >
          <CiMenuFries />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
