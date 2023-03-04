import { StripeContext } from "@/stripecontext/context";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AiOutlineShopping, AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const { setOpen, cart, totalquantity, setTotalquantity } =
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
      <Link href="/">
        <AiOutlineHome />
      </Link>

      <div className=" text-2xl">BIO-TWR</div>
      <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          {cartBadge && (
            <div className=" animate-animate absolute top-1 ml-[-1px] w-5 h-5 bg-indigo-700 text-white rounded-full items-center flex justify-center text-xs  ">
              {totalQuantity}
            </div>
          )}
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
