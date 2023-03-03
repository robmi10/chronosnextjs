import { StripeContext } from "@/stripecontext/context";
import React, { useContext, useEffect } from "react";
import { AiOutlineShopping, AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  const { setOpen, open, cart } = useContext(StripeContext);
  const cartBadge = cart.length > 0;

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  console.log({ cartBadge });

  console.log({ cartBadge });
  return (
    <div className="w-full h-20 border border-gray-200 flex flex-row justify-between p-12">
      <div>
        <AiOutlineHome />
      </div>

      <div className=" text-2xl">BIOTWR</div>
      <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          {cartBadge && (
            <div className="absolute top-8 w-4 h-4 bg-blue-500 text-white rounded-md  text-xs  ">
              {cart.length}
            </div>
          )}
          <AiOutlineShopping />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
