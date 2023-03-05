import { Link } from "react-scroll";
import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-screen h-screen justify-center items-center flex  ">
      <img src="/images/nature.jpg" className=" object-fill" />

      <div className=" justify-center bg-slate-600 bg-opacity-30 p-8 rounded-full w-82 text-white h-1/12 flex flex-col gap-5  absolute ml-6 md:ml-0  items-center">
        <h1 className="text-5xl mt-20 font-bold">Chronos Nutrition</h1>
        <h1 className=" text-2xl">
          Följer vetenskapliga framsteg för att utveckla hälsofrämjande
          produkter.
        </h1>
        <Link
          to="infonow"
          offset={0}
          duration={1000}
          smooth={true}
          className="animate-bounce cursor-pointer mt-20"
        >
          <BsChevronCompactDown size={50} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
