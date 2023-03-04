import { StripeContext } from "@/stripecontext/context";
import React, { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { Spinner } from "@chakra-ui/react";

const Cart = () => {
  const { setOpen, cart, setCart, setCheckoutstatus, checkoutstatus } =
    useContext(StripeContext);

  const totalQuantity = cart?.reduce((accumalator, items) => {
    return accumalator + items.quantity;
  }, 0);


  const cartIsNotEmpty = totalQuantity > 0;
  return (
    <div className="fixed right-0 top-0 animate-moveback h-full w-screen md:w-3/12 bg-white border-2 border-gray-100">
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

      {cartIsNotEmpty && (
        <>
          <div className=" w-full flex justify-center h-2/4">
            {cart.map((option, i) => {
              return (
                <div
                  key={i}
                  className="w-full h-4/12 items-center flex flex-col justify-center p-8"
                >
                  <img
                    className="w-full h-3/4 rounded-full"
                    src="./images/biowtr.jpg"
                  />
                  <div className=" w-full justify-center  flex flex-col p-4 gap-2">
                    <div className=" text-2xl">{option.info?.product.name}</div>
                    <div className=" text-md">
                      {option.info?.product.description}
                    </div>
                    <div>
                      {option.info?.unit_amount_decimal.slice(0, -2)} SEK
                    </div>
                    <div>Antal {option.quantity} </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-2  items-center justify-center mt-8">
            <button
              className="bg-black w-3/4 h-8 rounded-md text-white text-1xl"
              onClick={() => {
                setCheckoutstatus("mining");
              }}
            >
              {checkoutstatus === "mining" ? <Spinner /> : <h1>UTCHECKNING</h1>}
            </button>

            <button
              className="bg-white border-2 w-3/4 h-8 justify-center items-center flex rounded-md text-black text-1xl"
              onClick={() => {
                setCart([]);
                localStorage.removeItem("cart");
              }}
            >
              <BiTrashAlt />
            </button>
          </div>
        </>
      )}

      {!cartIsNotEmpty && (
        <div className=" w-full h-2/4  flex justify-center items-center text-xl font-semibold">
          <h1>VARUKORGEN ÄR TOM</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
