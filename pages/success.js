import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Success = () => {
  return (
    <div className=" w-screen h-screen flex justify-center  items-center">
      <div>
        <h1 className=" text-4xl font-bold">Din vara är beställd.</h1>
        <h1 className="text-md font-semibold">
          Kolla din mail för leverans detaljer.
        </h1>
        <Link  href="/" className="flex mt-8 flex-row  items-center gap-4">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
          <h1>TILLBAKA</h1>
        </Link>
      </div>
    </div>
  );
};

export default Success;
