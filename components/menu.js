import { StripeContext } from "@/stripecontext/context";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Menu = () => {
  const { setMenu } = useContext(StripeContext);
  return (
    <div className="fixed z-30 top-0 w-screen h-screen bg-white">
      <div className="p-8">
        <button
          onClick={() => {
            setMenu(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className=" flex flex-row  justify-center items-center  p-10">
        <div className=" text-4xl">MENU</div>
      </div>
      <div className=" w-full h-2/4 gap-12 flex flex-col items-center justify-center ">
        <Link
          href="#shop"
          onClick={() => {
            setMenu(false);
          }}
          scroll={false}
          className=" text-2xl"
        >
          PRODUKTER
        </Link>
        <Link
          href="#infonow"
          onClick={() => {
            setMenu(false);
          }}
          scroll={false}
          className=" text-2xl"
        >
          OM-OSS
        </Link>

        <Link
          href="#faq"
          onClick={() => {
            setMenu(false);
          }}
          scroll={false}
          className=" text-2xl"
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Menu;
