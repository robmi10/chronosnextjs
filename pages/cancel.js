import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Cancel = () => {
  return (
    <div className=" w-screen h-screen flex justify-center  items-center">
      <div>
        <h1 className=" text-2xl md:text-4xl font-bold">
          Din beställning avbröts.
        </h1>
        <Link href="/" className="flex mt-8 flex-row  items-center gap-4">
          <AiOutlineArrowLeft></AiOutlineArrowLeft>
          <h1>TILLBAKA</h1>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
