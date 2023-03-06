import { Link } from "react-scroll";
import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-screen h-screen justify-center items-center flex  ">
      <img src="/images/nature.jpg" className="h-screen w-full object-cover " />

      <div className=" justify-center bg-slate-400 bg-opacity-10 p-8  md:w-82 h-96 w-full text-white md:h-screen flex flex-col md:gap-5  absolute  items-center">
        <h1 className="text-5xl mt-20 font-bold">Chronos Nutrition</h1>
        <h1 className=" text-2xl ">
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
