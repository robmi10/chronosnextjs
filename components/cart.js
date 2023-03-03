import { StripeContext } from "@/stripecontext/context";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import biowtr from "../public/images/biowtr.jpg";

const Cart = () => {
  const { setOpen, cart, setCheckoutstatus } = useContext(StripeContext);
  console.log({ cart });
  return (
    <div className="fixed right-0 top-0 h-full w-3/12 bg-slate-100">
      <div className=" flex flex-row justify-between p-8">
        <div>CART</div>
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className=" w-full  flex justify-center h-2/4">
        {cart.map((option, i) => {
          console.log({ option });
          return (
            <div
              key={i}
              className="w-full h-4/12 items-center flex flex-col justify-center p-8"
            >
              <img
                className="w-full h-3/4 rounded-sm"
                src="./images/biowtr.jpg"
              />
              <div className=" w-full justify-center  flex flex-col p-4 gap-2">
                <div className=" text-2xl">{option.info?.product.name}</div>
                <div className=" text-md">
                  {option.info?.product.description}
                </div>
                <div>{option.info?.unit_amount_decimal.slice(0, -2)} SEK</div>
                <div>Antal {option.quantity} </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center mt-8">
        <button
          className="bg-black w-3/4 rounded-md text-white text-1xl"
          onClick={() => {
            setCheckoutstatus(true);
          }}
        >
          UTCHECKNING
        </button>
      </div>
    </div>
  );
};

export default Cart;
