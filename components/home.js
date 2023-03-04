import { Link } from "react-scroll";
import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-screen h-screen justify-center items-center flex  ">
      <div className=" justify-center   flex flex-col gap-2 absolute ml-6 md:ml-0">
        <h1 className="text-4xl font-bold">Chronos Nutrition</h1>
        <h1 className=" text-xl">
          Följer vetenskapliga framsteg för att utveckla hälsofrämjande
          produkter.
        </h1>
      </div>
      <Link
        to="infonow"
        offset={0}
        duration={1000}
        smooth={true}
        className="mt-96 animate-bounce cursor-pointer"
      >
        <BsChevronCompactDown size={50} />
      </Link>
    </div>
  );
};

export default Home;
